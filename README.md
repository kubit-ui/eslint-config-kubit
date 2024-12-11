# eslint-config-kubit

This package provides Kubit's ESLint configuration as an extensible shared config.

## Installation

```bash
npm install --save-dev eslint eslint-config-kubit
```

or

```bash
yarn add --dev eslint eslint-config-kubit
```

### Dependencies

This package requires the following peer dependencies:

- `eslint` 7.x | 8.x
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
const eslintConfig = require('eslint-config-kubit');
const path = require('path');

module.exports = eslintConfig({
  noIndexImportConfig: {
    aliases: {
      '@/types': './src/types/*',
      '@/components': './src/components/*',
      '@/hooks': './src/hooks/*',
      '@/utils': './src/utils/*',
      '@/styles': './src/styles/*',
      '@/constants': './src/constants/*',
      '@/provider': './src/provider/*',
      '@/tests': './src/tests/*',
      '@/assets': './src/assets/*',
      'fixtures/*': './src/__fixtures__/*',
    },
  },
  tsConfigPath: path.resolve(__dirname, './tsconfig.json'),
});
```
