/**
 * rollup-esbuild-plugin.cjs — 用 esbuild 转译 TS/TSX，替代 rollup-plugin-typescript2。
 *
 * 背景：仓库已迁移 TypeScript 7（原生编译器，无 compiler API），
 * rollup-plugin-typescript2 / rollup-plugin-dts 均依赖 TS compiler API 而崩溃。
 * UMD 构建只需将 TS 转译为 ESM 供 rollup 打包，无需类型检查，
 * 因此用 esbuild（转译器）替代完全足够。
 */
const path = require("path")
const fs = require("fs")

const fs_exists = (p) => {
	try {
		fs.accessSync(p)
		return true
	} catch {
		return false
	}
}

// 定位较新 esbuild（0.28，vite 附带）；旧版 0.12 无法处理现代语法
let esbuild
{
	const pnpmRoot = path.join(__dirname, "..", "node_modules", ".pnpm")
	const candidates = []
	try {
		if (fs_exists(pnpmRoot)) {
			candidates.push(
				...fs
					.readdirSync(pnpmRoot)
					.filter((d) => /^esbuild@/.test(d))
					.sort()
					.reverse()
					.map((d) => path.join(pnpmRoot, d, "node_modules", "esbuild")),
			)
		}
	} catch {}
	candidates.push(
		path.join(__dirname, "..", "node_modules", "esbuild"),
		path.join(
			__dirname,
			"..",
			"node_modules",
			"vite",
			"node_modules",
			"esbuild",
		),
	)
	for (const c of candidates) {
		try {
			const mod = require(c)
			if (mod && mod.transformSync) {
				esbuild = mod
				break
			}
		} catch {}
	}
}
if (!esbuild) {
	throw new Error("[rollup-esbuild-plugin] esbuild not found")
}

const createEsbuildPlugin = () => ({
	name: "esbuild-transform",
	transform(code, id) {
		if (!/\.[tj]sx?$/.test(id)) return null
		if (id.includes("node_modules")) return null
		const loader = id.endsWith(".tsx")
			? "tsx"
			: id.endsWith(".ts")
				? "ts"
				: "js"
		const result = esbuild.transformSync(code, {
			loader,
			format: "esm",
			target: "esnext",
			sourcemap: true,
			sourcefile: id,
			jsx: "automatic",
		})
		return { code: result.code, map: result.map || null }
	},
})

module.exports = createEsbuildPlugin
