# 发布 @formily/\* 到自建 Nexus 仓库

> 仓库：alibaba/formily fork（formily_next → react19-antd6 分支）
> 栈：lerna + yarn workspaces monorepo，10 个 public 包（版本 2.3.7）
> 本机 Nexus：http://192.168.4.108:8081（`~/.npmrc` 已指向 `repository/npm-public/`）

---

## 0. 已处理的阻塞问题

根 `package.json` 的 `devEngines.node` 原是字符串 `"18.x || 20.x || 22.x"`，
npm 11 要求对象结构且会做运行时强校验（Node v24 不满足 `<23` 报 `EBADDEVENGINES`）。
已改为：

```json
"devEngines": {
  "runtime": { "name": "node", "version": ">=18" }
}
```

（`npm config get registry` 已验证恢复正常）

## 1. 待发布包与依赖顺序

| 顺序 | 包                      | 说明                                                                          |
| ---- | ----------------------- | ----------------------------------------------------------------------------- |
| 1    | @formily/shared         | 最底层工具                                                                    |
| 2    | @formily/reactive       | 响应式内核                                                                    |
| 3    | @formily/reactive-react | reactive 的 React 绑定                                                        |
| 4    | @formily/core           | 核心（依赖 shared/reactive/path）                                             |
| 5    | @formily/validator      | 校验器（依赖 shared）                                                         |
| 6    | @formily/path           | 路径                                                                          |
| 7    | @formily/grid           | 栅格布局                                                                      |
| 8    | @formily/json-schema    | JSON Schema（依赖 shared/validator/reactive）                                 |
| 9    | @formily/react          | React 绑定（依赖 core/reactive/reactive-react/shared）                        |
| 10   | @formily/antd           | antd6 组件（依赖 core/grid/json-schema/react/reactive/reactive-react/shared） |

private 不发布：`@formily/benchmark`、`@formily/reactive-test-cases-for-react18`

## 2. Nexus 侧准备（管理员）

1. 创建 **hosted** npm 仓库（发布目标），如 `npm-private`
2. 建议创建 **group** npm 仓库（消费者用），如 `npm-group` = `npm-private` + `npm-proxy(https://registry.npmjs.org)`
   - 这样消费者一处地址即可同时解析私有包 + 官方依赖（react/antd 等）
3. 创建部署账号（如 `formily-bot`），授权：
   - `npm-private`：`nx-repository-view-npm-*` 的 `browse / read / add`
   - `npm-group`：`browse / read`

> 若已有 `npm-public`，需确认它是 proxy(只读) 还是 group/hosted：
> 发布必须指向 **hosted** 仓库；读取可以指向 group/proxy。

## 3. 本地 npm 认证（⚠️ 在终端自己执行，含密码）

**不要把密码写进项目 `.npmrc`**（会被 git 提交）。写进**用户级 `~/.npmrc`**：

```bash
# 交互输入 Nexus 用户名 / 密码 / 邮箱，自动把 _authToken 写入 ~/.npmrc
npm adduser --registry=http://192.168.4.108:8081/repository/npm-private/
```

完成后 `~/.npmrc` 应包含：

```ini
registry=http://192.168.4.108:8081/repository/npm-public/
//192.168.4.108:8081/repository/npm-private/:_authToken=<token>
//192.168.4.108:8081/repository/npm-private/:always-auth=true
```

（`npm-public` 若同样需要读认证，也补一条它的 `_authToken`）

## 4. 构建产物（发布前必须）

```bash
yarn install --ignore-engines
npm run build        # rimraf + lerna run build，产出 lib/esm/dist
```

若 antd 的 `build:umd`(rollup)/`build:style`(ts-node) 报错，可只构建消费侧产物：

```bash
npx lerna run build:cjs && npx lerna run build:esm
```

## 5. 发布

### 方式 A：lerna 全量发布（推荐）

不 bump 版本、不改 git、不跑 preversion，只发布 registry 中没有的包：

```bash
npx lerna publish from-package --yes \
  --registry=http://192.168.4.108:8081/repository/npm-private/
```

（lerna 会继承 `~/.npmrc` 的认证；发布时按依赖拓扑顺序自动逐个推）

### 方式 B：手动按依赖顺序发布（可控/调试用）

```bash
for p in shared reactive reactive-react core validator path grid json-schema react antd; do
  (cd packages/$p && npm publish --registry=http://192.168.4.108:8081/repository/npm-private/)
done
```

## 6. 版本策略（建议先定）

- 沿用 `2.3.7`：最简单；但若 `npm-public` 是代理官方源，group 里可能与官方同版本混淆
- **bump 私有版**（推荐，避免混淆）：10 个包 + lerna.json 统一改成 `2.4.0`（或 `2.3.7-react19.0`）
  - 直接改各 `packages/*/package.json` 的 `version` 与根 `lerna.json` 的 `version` 即可（不跑 `lerna version`，避免触发 preversion/改 git）
  - 然后按第 5 节发布

## 7. 验证

```bash
# 确认已发布
npm view @formily/antd version --registry=http://192.168.4.108:8081/repository/npm-private/

# 消费者安装测试（用 group 地址）
npm i @formily/antd @formily/react @formily/core --registry=http://192.168.4.108:8081/repository/npm-group/
```

## 8. 常见坑

1. 认证信息只放 `~/.npmrc`，**不要**进项目 `.npmrc`/git
2. 发布必须指向 **hosted** 仓库；只读 proxy 无法 publish（E401/E404）
3. 消费者必须用 **group** 地址，否则 `@formily/*` 依赖的官方包（react/antd/rc-\*）解析不到
4. scoped 包 `@formily/*` 已带 `publishConfig.access:public`，对私有仓无影响，保留即可
5. 若 `npm view`/`publish` 报 `E401 Unable to authenticate`，说明 `~/.npmrc` 的 token 缺失或权限不足
