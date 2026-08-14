English | [简体中文](./README.zh-cn.md)

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

## Background

In React, the whole tree rendering performance problem of the form is very obvious in the controlled mode. Especially for the scene of data linkage, it is easy to cause the page to be stuck. To solve this problem, we have distributed the management of the state of each form field, which significantly improves the performance of the form operations. At the same time, we deeply integrate the JSON Schema protocol to help you solve the problem of back-end driven form rendering quickly.

## Features

- 🖼 Designable, You can quickly develop forms at low cost through [Form Builder](https://designable-antd.formilyjs.org/).
- 🚀 High performance, fields managed independently, rather rerender the whole tree.
- 💡 Integrated Alibaba Fusion and Ant Design components are guaranteed to work out of the box.
- 🎨 JSON Schema applied for BackEnd. JSchema applied for FrontEnd. Two paradigms can be converted to each other.
- 🏅 Side effects are managed independently, making form data linkages easier than ever before.
- 🌯 Override most complicated form layout use cases.

## Form Builder

![https://designable-antd.formilyjs.org/](https://img.alicdn.com/imgextra/i3/O1CN01xAJj1y1wcGzXYc1Uq_!!6000000006328-2-tps-2980-1740.png)

## WebSite

2.0

<https://formilyjs.org>

1.0

<https://v1.formilyjs.org>

## Community

- [formilyjs](https://github.com/formilyjs)
- [designable](https://github.com/alibaba/designable)
- [icejs](https://github.com/alibaba/ice)

## How to contribute?

- [Contribute document](https://formilyjs.org/zh-CN/guide/contribution)

## Contributors

This project exists thanks to all the people who contribute.
<a href="https://github.com/alibaba/formily/graphs/contributors"><img src="https://contrib.rocks/image?repo=alibaba/formily" /></a>

## Troubleshooting: `workspace:*` error when installing `@next-formily` packages

### Symptom

In a consumer project (for example `ValueOctpus/web`), `pnpm install` fails with:

```
[ERR_PNPM_WORKSPACE_PKG_NOT_FOUND] In : "@next-formily/core@workspace:*" is in the dependencies but no package named "@next-formily/core" is present in the workspace
```

It may also report `ERR_PNPM_TARBALL_INTEGRITY` while downloading the tarballs, even though `pnpm view @next-formily/antd@3.1.1 dependencies` returns clean real versions (`3.1.1`).

### Root cause

The published artifacts are fine — the tarballs on Nexus (both `sc_formily` and `npm-public`) contain real `3.1.1` dependency versions, not `workspace:*`. The real culprit is a **stale pnpm metadata cache on the consumer machine**:

1. An early `3.1.1` was published with `npm publish`, which keeps `workspace:*` inside the tarball's inner `package.json`.
2. The packages were later re-published with `pnpm publish`, which rewrites `workspace:*` to real versions.
3. However, pnpm caches the package metadata under `~/.cache/pnpm/v11/metadata/<registry>/@next-formily/*.jsonl`, and `pnpm install` reads this reduced cache. If it still holds the old metadata, it fails — while `pnpm view` (which uses `metadata-full`) looks clean, which is the tell-tale sign.

### Fix

Clear the pnpm metadata caches and reinstall:

```bash
rm -rf ~/.cache/pnpm/v11/metadata/*/@next-formily \
       ~/.cache/pnpm/v11/metadata-full/*/@next-formily \
       ~/.cache/pnpm/v11/metadata-full-filtered/*/@next-formily
pnpm install
```

### Prevention

- Always publish with `pnpm publish` (never `npm publish`) so `workspace:*` in the workspace protocol is converted to real versions inside the published tarball.
- When releasing a new version, remind consumers to clear the `@next-formily` pnpm metadata caches if they hit this error.

## LICENSE

Formily is open source software licensed as
[MIT](https://github.com/alibaba/formily/blob/master/LICENSE.md).
