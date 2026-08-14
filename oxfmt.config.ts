/*
 * @Date: 2026-08-14
 * @Description: NextFormily oxfmt 配置 — 匹配仓库既有风格（空格缩进 + 单引号）
 */
import { defineConfig } from 'oxfmt'

export default defineConfig({
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  newlinesBetween: true,
})
