/* eslint-disable */

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  global: {
    require,
    module,
  },
  rules: {
    'no-empty': 'off',
    'no-console': 'error',
    'no-debugger': 'warn',
  },
}
