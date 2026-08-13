module.exports = {
  collectCoverage: true,
  verbose: true,
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  testMatch: ['**/__tests__/**/*.spec.[jt]s?(x)'],
  setupFilesAfterEnv: ['@testing-library/jest-dom', './global.config.ts'],
  // @ant-design/* 打包为 ESM（含 .js），需在 jest 中转换；antd 走 CJS(lib) 无需转换
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.jest.json',
        diagnostics: false,
      },
    ],
  },
  transformIgnorePatterns: ['/node_modules/(?!@ant-design/)'],
  // moduleNameMapper: process.env.TEST_ENV === 'production' ? undefined : alias,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/',
    '/esm/',
    '/lib/',
    'package.json',
    '/demo/',
    '/packages/builder/src/__tests__/',
    '/packages/builder/src/components/',
    '/packages/builder/src/configs/',
    'package-lock.json',
  ],
}
