/**
 * 自实现的 case 转换工具。
 *
 * 背景：camel-case / pascal-case / param-case / lower-case / upper-case / no-case
 * 从 v5 起已全部改为 ESM-only 且停止维护（作者转向 change-case）。
 * 为避免 @next-formily/shared 的 CJS 构建产物（lib/，通过 require 加载）在 Node 中
 * 报 ERR_REQUIRE_ESM，此处内联了 v3/v4 的实现，行为保持一致，同时移除运行时依赖、
 * 减小包体积。
 */

export interface CaseOptions {
  /** 大小写边界拆分正则（默认支持 camelCase 与连续大写边界） */
  splitRegexp?: RegExp | RegExp[]
  /** 去除非单词字符的正则 */
  stripRegexp?: RegExp
  /** 单词转换函数 */
  transform?: (value: string, index: number) => string
  /** 单词连接符 */
  delimiter?: string
}

const DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g]
const DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi

function replace(input: string, re: RegExp | RegExp[], value: string): string {
  if (re instanceof RegExp) return input.replace(re, value)
  return re.reduce((acc, r) => acc.replace(r, value), input)
}

/** 将字符串拆分为独立的"词"，兼容 no-case 的分词规则（词间以 \0 分隔） */
function noCase(input: string, options: CaseOptions = {}): string {
  const {
    splitRegexp = DEFAULT_SPLIT_REGEXP,
    stripRegexp = DEFAULT_STRIP_REGEXP,
    transform = lowerCase,
    delimiter = ' ',
  } = options
  const result = replace(
    replace(input, splitRegexp, '$1\0$2'),
    stripRegexp,
    '\0',
  )
  let start = 0
  let end = result.length
  while (result.charAt(start) === '\0') start++
  while (result.charAt(end - 1) === '\0') end--
  return result
    .slice(start, end)
    .split('\0')
    .map((word, index) => transform(word, index))
    .join(delimiter)
}

/** 转为小写 */
export function lowerCase(input: string): string {
  return input.toLowerCase()
}

/** 转为大写 */
export function upperCase(input: string): string {
  return input.toUpperCase()
}

function pascalCaseTransform(input: string, index: number): string {
  const firstChar = input.charAt(0)
  const lowerChars = input.substr(1).toLowerCase()
  if (index > 0 && firstChar >= '0' && firstChar <= '9') {
    return `_${firstChar}${lowerChars}`
  }
  return firstChar.toUpperCase() + lowerChars
}

/** 转为 PascalCase */
export function pascalCase(input: string, options: CaseOptions = {}): string {
  return noCase(input, {
    delimiter: '',
    transform: pascalCaseTransform,
    ...options,
  })
}

function camelCaseTransform(input: string, index: number): string {
  if (index === 0) return input.toLowerCase()
  return pascalCaseTransform(input, index)
}

/** 转为 camelCase */
export function camelCase(input: string, options: CaseOptions = {}): string {
  return noCase(input, {
    delimiter: '',
    transform: camelCaseTransform,
    ...options,
  })
}

/** 转为 param-case（kebab-case） */
export function paramCase(input: string, options: CaseOptions = {}): string {
  return noCase(input, { delimiter: '-', ...options })
}
