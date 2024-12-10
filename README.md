# kubit-eslint-config

This package provides Kubit's ESLint configuration as an extensible shared config.

## Installation

```bash
npm install --save-dev eslint @kubit/eslint-config-kubit
```

or

```bash
yarn add --dev eslint @kubit/eslint-config-kubit
```

### Dependencies

This package requires the following peer dependencies:

- `eslint`
- `eslint-plugin-react`
- `@typescript-eslint/parser`
- `@typescript-eslint/eslint-plugin`

```bash
npm install --save-dev eslint eslint-plugin-react @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

or

```bash
yarn add --dev eslint eslint-plugin-react @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## Usage

Create an `.eslintrc.js` file in the root of your project and extend the configuration:

```js
const eslintConfig = require('@kubit-ui-web/kubit-eslint-config');

module.exports = eslintConfig({
  noIndexImportConfig: {
    aliases: {
      '@components': './src/components',
    },
    ignoreImports: ['react'],
  },
  noRestrictedImportsConfig: {
    paths: ['lodash'],
  },
  tsConfigPath: './tsconfig.json',
});
```
