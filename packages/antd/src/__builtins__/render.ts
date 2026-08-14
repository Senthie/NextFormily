import { ReactElement } from 'react'
import * as ReactDOM from 'react-dom'
import { createRoot as ReactDOMClientCreateRoot } from 'react-dom/client'
import type { Root } from 'react-dom/client'

// 移植自rc-util: https://github.com/react-component/util/blob/master/src/React/render.ts

type CreateRoot = (container: ContainerType) => Root

// React 19 已将 createRoot 从 react-dom 主入口移入 react-dom/client：
// - React 17：react-dom 提供 render/unmountComponentAtNode（legacy 路径）
// - React 18/19：react-dom/client 提供 createRoot（concurrent 路径）
const fullClone = {
  ...ReactDOM,
  createRoot: ReactDOMClientCreateRoot,
} as typeof ReactDOM & {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?: {
    usingClientEntryPoint?: boolean
  }
  createRoot?: CreateRoot
}

const {
  version,
  render: reactRender,
  unmountComponentAtNode,
} = fullClone as any

let createRoot: CreateRoot
try {
  // 直接以 createRoot 存在性判断，不依赖 version 字符串解析
  if (fullClone.createRoot) {
    createRoot = fullClone.createRoot
  }
} catch (e) {
  // Do nothing;
}

function toggleWarning(skip: boolean) {
  const { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } = fullClone

  if (
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED &&
    typeof __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === 'object'
  ) {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint =
      skip
  }
}

const MARK = '__antd_mobile_root__'

// ========================== Render ==========================
type ContainerType = (Element | DocumentFragment) & {
  [MARK]?: Root
}

function legacyRender(node: ReactElement, container: ContainerType) {
  reactRender(node, container)
}

function concurrentRender(node: ReactElement, container: ContainerType) {
  toggleWarning(true)
  const root = container[MARK] || createRoot(container)
  toggleWarning(false)
  root.render(node)
  container[MARK] = root
}

export function render(node: ReactElement, container: ContainerType) {
  if (createRoot as unknown) {
    concurrentRender(node, container)
    return
  }
  legacyRender(node, container)
}

// ========================== Unmount =========================
function legacyUnmount(container: ContainerType) {
  return unmountComponentAtNode(container)
}

async function concurrentUnmount(container: ContainerType) {
  // Delay to unmount to avoid React 18 sync warning
  return Promise.resolve().then(() => {
    container[MARK]?.unmount()
    delete container[MARK]
  })
}

export function unmount(container: ContainerType) {
  if (createRoot as unknown) {
    return concurrentUnmount(container)
  }

  return legacyUnmount(container)
}
