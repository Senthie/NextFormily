[English](./README.md) | 简体中文

<p align="center">
<img src="https://img.alicdn.com/tfs/TB1fHhZu4D1gK0jSZFyXXciOVXa-2500-1200.png">
<img src="https://img.shields.io/npm/dt/@formily/core"/>
<img src="https://img.shields.io/npm/dm/@formily/core"/>
<a href="https://www.npmjs.com/package/@formily/core"><img src="https://img.shields.io/npm/v/@formily/core.svg"></a>
<a href="https://codecov.io/gh/alibaba/formily">
  <img src="https://codecov.io/gh/alibaba/formily/branch/formily_next/graph/badge.svg?token=3V9RU8Wh9d"/>
</a>
<img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"/>
<a href="https://github.com/actions-cool/issues-helper">
  <img src="https://img.shields.io/badge/using-issues--helper-blueviolet"/>
</a>
<a href="https://app.netlify.com/sites/formily/deploys"><img src="https://api.netlify.com/api/v1/badges/7145918b-9cb5-47f8-8a42-111969e232ef/deploy-status"/></a>
</p>

---

## 背景

在 React 中，在受控模式下，表单的整树渲染问题非常明显。特别是对于数据联动的场景，很容易导致页面卡顿，为了解决这个问题，我们将每个表单字段的状态做了分布式管理，从而大大提升了表单操作性能。同时，我们深度整合了 JSON Schema 协议，可以帮助您快速解决后端驱动表单渲染的问题。

## 特性

- 🖼 可设计，借助 Form Builder 可以快速搭建表单
- 🚀 高性能，字段分布式渲染，大大减轻 React 渲染压力
- 💡 支持 Ant Design/Fusion Next 组件体系
- 🎨 JSX 标签化写法/JSON Schema 数据驱动方案无缝迁移过渡
- 🏅 副作用逻辑独立管理，涵盖各种复杂联动校验逻辑
- 🌯 支持各种表单复杂布局方案

## Form Builder

![https://designable-antd.formilyjs.org/](https://img.alicdn.com/imgextra/i3/O1CN01xAJj1y1wcGzXYc1Uq_!!6000000006328-2-tps-2980-1740.png)

## 官网

2.0

https://formilyjs.org

1.0

https://v1.formilyjs.org

## 生态产品

- [formilyjs](https://github.com/formilyjs)
- [designable](https://github.com/alibaba/designable)
- [icejs](https://github.com/alibaba/ice)

## 如何贡献

- [贡献指南](https://formilyjs.org/zh-CN/guide/contribution)

## 贡献者

This project exists thanks to all the people who contribute.
<a href="https://github.com/alibaba/formily/graphs/contributors"><img src="https://contrib.rocks/image?repo=alibaba/formily" /></a>

## 常见问题：安装 `@next-formily` 包时出现 `workspace:*` 错误

### 现象

在消费方项目（例如 `ValueOctpus/web`）中，`pnpm install` 报错：

```
[ERR_PNPM_WORKSPACE_PKG_NOT_FOUND] In : "@next-formily/core@workspace:*" is in the dependencies but no package named "@next-formily/core" is present in the workspace
```

可能还会在下载 tarball 时报告 `ERR_PNPM_TARBALL_INTEGRITY`，但此时 `pnpm view @next-formily/antd@3.1.1 dependencies` 显示的却是干净的真实版本（`3.1.1`）。

### 发生原因

发布物本身没有问题——Nexus 上（`sc_formily` 和 `npm-public`）的 tarball 内部依赖都是真实的 `3.1.1`，并非 `workspace:*`。真正的根因是**消费方机器上的 pnpm 元数据缓存残留**：

1. 早期使用 `npm publish` 发布了 `3.1.1`，它会保留 tarball 内部 `package.json` 里的 `workspace:*`。
2. 之后改用 `pnpm publish` 重新发布，它会将 `workspace:*` 改写为真实版本。
3. 但 pnpm 会把包元数据缓存在 `~/.cache/pnpm/v11/metadata/<registry>/@next-formily/*.jsonl`，而 `pnpm install` 读取的是这份精简缓存。若缓存里仍是旧元数据就会报错——而 `pnpm view`（使用 `metadata-full`）显示正常，这种“view 干净、install 报错”的矛盾正是缓存未刷新的信号。

### 解决办法

清除 pnpm 元数据缓存后重新安装：

```bash
rm -rf ~/.cache/pnpm/v11/metadata/*/@next-formily \
       ~/.cache/pnpm/v11/metadata-full/*/@next-formily \
       ~/.cache/pnpm/v11/metadata-full-filtered/*/@next-formily
pnpm install
```

### 预防措施

- 发布时务必使用 `pnpm publish`（切勿用 `npm publish`），这样 workspace 协议中的 `workspace:*` 才会在发布的 tarball 内转换为真实版本。
- 发布新版本时，提醒消费方如遇此错误先清除 `@next-formily` 的 pnpm 元数据缓存。

## LICENSE

Formily is open source software licensed as
[MIT.](https://github.com/alibaba/formily/blob/master/LICENSE.md)
