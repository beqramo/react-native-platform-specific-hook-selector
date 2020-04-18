module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended", 
    "eslint-config-prettier",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  ignorePatterns: ["lib/*.js"],

}
