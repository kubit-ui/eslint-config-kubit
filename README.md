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
- `eslint-plugin-no-relative-import-paths`

```bash
npm install --save-dev eslint eslint-plugin-react @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-no-relative-import-paths
```

or

```bash
yarn add --dev eslint eslint-plugin-react @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-no-relative-import-paths
```

## Usage

Create an `.eslintrc.js` file in the root of your project and extend the configuration:

```js
const eslintConfig = require('eslint-config-kubit');
const path = require('path');

module.exports = eslintConfig({
  noIndexImportConfig: {
    aliases: {
      '@/components': './src/components/*',
      '@/hooks': './src/hooks/*',
      '@/utils': './src/utils/*',
    },
  },
  tsConfigPath: path.resolve(__dirname, './tsconfig.json'),
});
```

If need override some rules, you can pass an argument to the function:

```js
const eslintConfig = require('eslint-config-kubit');
const path = require('path');

module.exports = eslintConfig({
  noIndexImportConfig: {
    aliases: {
      '@/types': './src/types/*',
    },
  },
  tsConfigPath: path.resolve(__dirname, './tsconfig.json'),
  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      rules: {
        'no-magic-numbers': 'off',
        'comma-dangle': 'off',
      },
    },
  ],
});
```

## License

APA License 2.0 © [Kubit](https://kubit-ui.com)
