# 自研拖拽式 JSON Schema 表单设计器（完整版）实施方案

> 目标栈：React 19.2 + antd 6.6 + @formily（我们已迁移好的运行时）
> 定位：类 designable 的三栏布局，拖拽产出 JSON Schema，无缝对接现有 `json-schema-template.ts` 运行时

---

## 1. 为什么不自研引入官方包

官方 `@designable/formily-antd@1.0.0-beta.45`（2022-03 起停更，长期 beta）：

- peerDeps 仅声明 `react >=16.8 || >=17`、`antd ^4`，不含 React 18/19 与 antd 5/6
- 底层依赖 antd 4 API（`visible`、`Steps.Step`、less 主题、moment），与 antd 6 的破坏性变更（`open`、`items`、dayjs、CSS-in-JS）全面冲突
- 需要像本次迁移一样做一轮完整适配，性价比低

自研的收益：完全跑在已验证的 React 19 + antd 6 + @formily 栈上，且产出 JSON 直接喂给我们已跑通的运行时。

## 2. 三栏布局总览

```
┌───────────────────────────────────────────────────────────┐
│ Toolbar：视图切换(设计/预览) · 撤销/重做 · 清空 · 导入 · 导出 JSON │
├──────────────┬──────────────────────────────┬──────────────┤
│ 左：组件库     │ 中：画布（实时表单预览）        │ 右：属性面板    │
│ Resource     │ Workspace / Viewport         │ SettingsForm  │
│ · 基础输入     │ · 拖放目标                   │ · 选中节点配置  │
│ · 选择类      │ · 节点可选中 / 删除 / 上移下移 │ · 标题/必填/枚举 │
│ · 日期时间    │ · 嵌套(FormLayout/ArrayTable) │ · x-reactions │
│ · 布局/数组    │ · 大纲树(Outline) 浮动面板    │ · 校验规则      │
├──────────────┴──────────────────────────────┴──────────────┤
│ 底部可折叠：JSON Schema 实时预览 + 复制                      │
└───────────────────────────────────────────────────────────┘
```

## 3. 核心数据流

```
拖拽组件 ──▶ 生成 schema 节点 ──▶ 一棵 JSON Schema 树(state)
                                     │
           实时 render（createSchemaField）◀─┘  画布预览
           属性面板编辑选中节点 ──▶ 更新树
           导出 ──▶ JSON.stringify(schema) ──▶ 粘贴到运行时表单
```

- **单一数据源**：整个设计器维护一棵 schema 树（`ISchema`），所有面板都围绕它读写
- **画布即验证**：画布直接用 `<SchemaField schema={tree} />` 渲染，拖错立刻可见
- **产出即标准**：导出的 JSON 与 `json-schema-template.ts` 完全同构

## 4. 模块划分（对应完整版清单）

| 模块                | 职责                                           | 关键实现点                                                            |
| ------------------- | ---------------------------------------------- | --------------------------------------------------------------------- |
| `Designer`          | 根组件，Context 下发 schema 树/选中态/操作 API | `createContext` + `useReducer`（undo/redo）                           |
| `ResourceWidget`    | 左栏组件库                                     | 组件注册表：`{name, icon, defaultSchema}`，antd6 组件清单见 §5        |
| `Workspace`         | 画布：拖放 + 渲染 + 节点选中                   | HTML5 DnD（v1）→ `@dnd-kit`（v2，仓库已有）；`createSchemaField` 渲染 |
| `OutlineTreeWidget` | 大纲树                                         | `antd.Tree` 绑定 schema 树，与画布选中态双向联动                      |
| `SettingsForm`      | 右栏属性面板                                   | 复用 `@formily` `createForm` + 每类组件一份配置 schema；antd6 表单    |
| `HistoryWidget`     | 撤销/重做                                      | 基于 schema 树不可变快照（`{past, present, future}`）                 |
| `JsonView`          | 底部实时 JSON + 复制/导入                      | `JSON.stringify` + `antd.Typography.Paragraph copyable`               |
| `ViewTools`         | 设计 / 预览切换                                | 预览 = 只渲染画布 + 隐藏编辑控件                                      |

## 5. 内置组件注册表（对齐现有运行时）

| 分类    | 组件                                                   | 默认 schema 模板                                                          |
| ------- | ------------------------------------------------------ | ------------------------------------------------------------------------- |
| 基础    | `Input`                                                | `{type:'string', title, 'x-decorator':'FormItem', 'x-component':'Input'}` |
| 基础    | `Password` / `NumberPicker`                            | number: `type:'number'`                                                   |
| 选择    | `Select` / `Radio.Group` / `Checkbox.Group`            | `enum:[{label,value}]`                                                    |
| 开关    | `Switch`                                               | `type:'boolean'`                                                          |
| 日期    | `DatePicker` / `TimePicker` / `DatePicker.RangePicker` | `type:'string'`（dayjs 已适配）                                           |
| 树/级联 | `TreeSelect` / `Cascader`                              | `dataSource` 树形 enum                                                    |
| 布局    | `FormLayout`                                           | 嵌套 object 容器                                                          |
| 数组    | `ArrayTable`                                           | 见 §6 特殊处理（Column 结构）                                             |
| 只读    | `PreviewText`                                          | 属性面板可切 `x-pattern:'readPretty'`                                     |

## 6. ArrayTable 在设计器中的特殊处理

务必遵循已验证的正确结构（否则 `parseSources` 崩溃）：

```
items (array, x-component: ArrayTable)
└─ items.properties 中每个字段 = Column 节点
   {type:'void', 'x-component':'ArrayTable.Column',
    'x-component-props':{title, dataIndex}, properties:{ 实际输入字段 }}
└─ properties.add = {type:'void','x-component':'ArrayTable.Addition'}
```

设计器对 ArrayTable 提供"列管理"子面板：增删列、列宽、操作列（Remove/MoveUp/MoveDown 自动生成），避免用户手拼结构。

## 7. 联动（x-reactions）配置

- 不要求用户手写 `{{ }}` 表达式，属性面板提供结构化配置：
  - 触发字段下拉 + 条件（`==` / `!=` / 布尔值）
  - 效果：`visible` / `disabled` / `required` / `title`
- 内部生成标准 `x-reactions`（与 `json-schema-template.ts` 中 `enabled → remark` 联动同款）

## 8. 技术选型

| 项          | 选择                                                                        | 理由                     |
| ----------- | --------------------------------------------------------------------------- | ------------------------ |
| 拖拽        | v1 HTML5 DnD；v2 `@dnd-kit`（根 node_modules 已有，array-table 排序已用它） | 零/低依赖，已验证        |
| 状态        | `useReducer` + 不可变快照                                                   | undo/redo 天然支持       |
| Schema 编辑 | 直接操作 `ISchema` 对象（浅拷贝+patch）                                     | 与运行时同构，无额外概念 |
| 渲染        | `createSchemaField` + 现有 components 注册表                                | 复用已验证运行时         |
| UI          | antd 6（`Layout`/`Tree`/`Form`/`Drawer`/`InputNumber`...）                  | 与栈一致                 |

## 9. 分阶段实施

- **Phase 1 — 骨架 + 拖拽产出**（半天）
  Designer 骨架 + 组件库（基础组件）+ 画布拖放 + 底部 JSON 实时预览/复制
  → 验收：拖 Input/Select 进画布，能实时看到表单与 JSON
- **Phase 2 — 完整三栏**（1 天）
  属性面板（标题/必填/枚举/组件 props）+ 大纲树 + 节点选中/删除/上移下移
  → 验收：拖出的字段可配置、可重排、可删
- **Phase 3 — 进阶能力**（1 天）
  嵌套（FormLayout）+ ArrayTable 列管理 + 联动配置 + 撤销/重做 + 预览/导入导出
  → 验收：能做嵌套对象与自增表格，联动可配，历史可回退
- **Phase 4 — 打磨**（0.5 天）
  Schema 合法性校验、错误提示、多组件图标、暗色样式
  → 验收：导出 JSON 可直接粘贴到 `json-schema-template` 运行

## 10. 风险与注意

1. **ArrayTable 编辑复杂度最高**：列管理 + 操作列自动生成，需对照已验证结构实现
2. **联动表达式**：全部走结构化 UI 生成，杜绝手写 `{{}}` 出错
3. **画布与大纲选中联动**：用统一 `selectedPath`（`FormPath`）桥接
4. **设计器 UI 全部 antd6**：避免引入 designable 那套 antd4 组件
5. **导出即标准**：任何一步导出都能被运行时消费，是每阶段的硬验收标准

## 11. 目录规划（建议）

```
examples/antd6-demo/src/designer/
  ├── index.tsx              # Designer 根组件 + 布局
  ├── context.ts             # SchemaStoreContext / 操作 API
  ├── components-registry.ts # 组件注册表（§5）
  ├── ResourceWidget.tsx     # 左栏
  ├── Workspace.tsx          # 画布
  ├── OutlineTreeWidget.tsx  # 大纲树
  ├── SettingsForm.tsx       # 属性面板
  ├── HistoryWidget.tsx      # undo/redo
  ├── JsonView.tsx           # JSON 预览
  ├── array-table-editor.tsx # ArrayTable 列管理
  └── styles.less
```
