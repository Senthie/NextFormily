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

---

## ✅ 实操记录（2026-08-14 已成功发布）

本次已按下方流程成功发布 10 个包到 Nexus `repository/sc_formily/`（npm hosted，版本 2.3.7）。
过程中修复了如下文档早期未覆盖的坑（详见各节标注）：

1. **认证必须用 Basic auth**（`_auth=base64(user:pass)`）；`_authToken`(Bearer) 在本 Nexus 未启用 token realm 时会 E401 → 见第 3 节
2. **首次部署需在 UI 接受 EULA**，否则 publish 403 `must accept the EULA`（无 REST API）→ 见第 2 节
3. **npm pack 会合并根 `.gitignore` 忽略 `esm/`** → 每包加 `files: ["lib", "esm"]`（已提交 `9ebfc4ca4`）→ 见第 4 节
4. **antd 的 less 需手动拷到 esm**（create-style 只生成 src/style.ts）→ 见第 4 节
5. **lerna 4 与 Node 24 不兼容**（`ERR_INVALID_ARG_TYPE`）→ 用 node 脚本按依赖序构建/发布 → 见第 4/5 节
6. **版本占用**：重发会报 `cannot publish over previously published` → 需先删 Nexus 组件 → 见第 8 节

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

### EULA（新装 Nexus 必做，⚠️ 否则 publish 403）

首次部署（或从未登录过 UI）的 Nexus 必须先在 UI 登录 admin 接受 **EULA**（onboarding 向导），
否则所有 publish 返回 `403 must accept the End User License Agreement (EULA)`。
本 Nexus 无 EULA 的 REST API（`/service/rest/v1/status/eula` 404），**只能 UI 操作**：
打开 `http://192.168.4.108:8081/` → 用 admin 登录 → 完成 Onboarding（接受 EULA）。

### Write policy（hosted 仓库需 ALLOW）

hosted 仓库的 **Write policy** 若是 `DENY`（publish 403）或 `ALLOW_ONCE`（同版本 409），
需改为 `ALLOW`。REST 设置：

```bash
curl -X PUT -H "Authorization: Basic <base64>" -H "Content-Type: application/json" \
  -d '{"name":"<repo>","online":true,"storage":{"blobStoreName":"default","strictContentTypeValidation":false,"writePolicy":"ALLOW"},"npm":{}}' \
  http://192.168.4.108:8081/service/rest/v1/repositories/npm/hosted/<repo>
# 返回 204 即成功
```

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

### ⚠️ 实际必须用 Basic auth（\_auth），不是 \_authToken

实测：本 Nexus 未启用 npm **Bearer token realm**，`npm adduser` 写入的 `_authToken`
在 publish 时返回 `E401 Unable to authenticate, need: BASIC realm`。
需改用 **Basic auth**（用户名+密码的 base64）：

```bash
# 生成 base64(user:password)，例如 admin:123456 → YWRtaW46MTIzNDU2
# ⚠️ 请换成你自己的账号密码，不要把明文密码写进文档/仓库
echo -n 'admin:你的密码' | base64

# 写入用户级 ~/.npmrc（不要进项目/.npmrc）
npm config set //192.168.4.108:8081/repository/npm-private/:_auth=<base64值>
# （npm 11 下 always-auth 不是有效选项，可忽略）

# 验证：返回 404 = 认证通过且包不存在；401 = 认证失败
curl -s -o /dev/null -w "%{http_code}\n" \
  -H "Authorization: Basic <base64值>" \
  http://192.168.4.108:8081/repository/npm-private/@formily%2fshared
```

## 4. 构建产物（发布前必须）

```bash
yarn install --ignore-engines
npm run build        # rimraf + lerna run build，产出 lib/esm/dist
```

若 antd 的 `build:umd`(rollup)/`build:style`(ts-node) 报错，可只构建消费侧产物：

```bash
npx lerna run build:cjs && npx lerna run build:esm
```

> ⚠️ **lerna 4 与 Node 24 不兼容**：`lerna run build` 在 Node 24 崩
> `ERR_INVALID_ARG_TYPE: The "code" argument must be of type number`。
> 改用 node 脚本按依赖序逐包构建（先全部 cjs 再全部 esm）：

```js
// /tmp/build-all.js
const { spawnSync } = require('child_process')
const order = [
  'shared',
  'path',
  'reactive',
  'reactive-react',
  'validator',
  'core',
  'grid',
  'json-schema',
  'react',
  'antd',
]
for (const step of ['build:cjs', 'build:esm']) {
  for (const pkg of order) {
    const r = spawnSync('npm', ['run', step], {
      cwd: `packages/${pkg}`,
      stdio: 'inherit',
    })
    if (r.status !== 0) process.exit(1)
  }
}
console.log('ALL OK')
```

### ⚠️ 关键：确保 esm 进包（npm pack 合并根 .gitignore）

根 `.gitignore` 忽略了 `lib/ esm/ dist/`，而 **npm pack 会合并它**，导致发布包**缺 esm**
（`module`/`types` 指向 esm，消费者会挂）。实测 antd 包 567 文件里 esm 全无。
**必须**给每个 public 包 package.json 加白名单（已提交 `9ebfc4ca4`）：

```json
"files": ["lib", "esm"]
```

antd 的 esm 代码引用了 `./xxx/style.less`，但 `create-style` 只生成 `src/style.ts`，esm 下无 less。
发布前把 src less 拷到 esm（18 个）：

```bash
cd packages/antd
find src -name '*.less' | while read f; do mkdir -p "esm/${f#src/}"; cp "$f" "esm/${f#src/}"; done
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

### 方式 C：node 脚本按依赖序发布（Node 24 下 lerna 不可用，推荐）

```js
// /tmp/publish-all.js —— 逐包 npm publish，任何失败即中断
const { spawnSync } = require('child_process')
const order = [
  'shared',
  'path',
  'reactive',
  'reactive-react',
  'validator',
  'core',
  'grid',
  'json-schema',
  'react',
  'antd',
]
const REG = 'http://192.168.4.108:8081/repository/npm-private/'
for (const pkg of order) {
  const r = spawnSync('npm', ['publish', '--registry=' + REG], {
    cwd: `packages/${pkg}`,
    stdio: 'inherit',
  })
  if (r.status !== 0) process.exit(1)
}
console.log('ALL PUBLISHED')
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
5. 若 `npm view`/`publish` 报 `E401 Unable to authenticate`，说明 `~/.npmrc` 的认证缺失或权限不足；
   若错误含 `BASIC realm`，说明需用 `_auth`（Basic）而不是 `_authToken`（Bearer）
6. **EULA**：新装 Nexus 未接受 EULA 时 publish 403 `must accept the EULA`，需先 UI 登录 admin 接受（无 REST API）
7. **Write policy**：hosted 仓库需 `ALLOW`，否则 publish 403（DENY）或同版本 409（ALLOW_ONCE）
8. **esm 打包**：npm pack 合并根 .gitignore，需每包 `files: ["lib","esm"]`，否则发布包缺 esm
9. **版本占用**：重发同版本报 `cannot publish over previously published`，先删 Nexus 组件再发：
   ```bash
   # 列出组件拿 id；DELETE 返回 204 即删除成功
   curl -s -H "Authorization: Basic <base64>" \
     "http://192.168.4.108:8081/service/rest/v1/components?repository=<repo>"
   curl -X DELETE -H "Authorization: Basic <base64>" \
     "http://192.168.4.108:8081/service/rest/v1/components/<组件id>"
   ```
10. **lerna 4 + Node 24** 不兼容（`ERR_INVALID_ARG_TYPE`），构建/发布用 node 脚本（见第 4/5 节）
