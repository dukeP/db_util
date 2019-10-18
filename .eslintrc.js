module.exports = {
  root: true,
  env: {
    es6: true
  },
  parser: 'babel-eslint', // 支持babel新语法
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    // prettier
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      // prettier 规则配置
      {
        endOfLine: 'auto', // 换行cr检查
        singleQuote: true, // 启动单引号
      }
    ],
  }
}
