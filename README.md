# eslint-config-kubit

This package provides Kubit's ESLint configuration as an extensible shared config.

## Installation

```bash
npm install --save-dev eslint eslint-config-kubit@0.0.3-flat
```

or

```bash
yarn add --dev eslint eslint-config-kubit@0.0.3-flat
```

### Dependencies

This package requires the following peer dependencies:

- `eslint` 9.x

```bash
npm install --save-dev eslint
```

or

```bash
yarn add --dev eslint
```

## Usage

Create an `eslint.config.js` file in the root of your project and extend the configuration:

```js
const eslintFlatConfig = require('eslint-config-kubit');
const path = require('path');

module.exports = eslintFlatConfig({
  checkBrowserCompatibility: true,
  browserList: [
    '> 0.5%',
    'last 2 versions',
    'Firefox ESR',
    'not dead',
    'iOS >= 10',
    'Safari >= 10',
    'Edge >= 15',
  ],
  noIndexImportConfig: {
    aliases: {
      '@/types': './src/types/*',
    },
  },
  tsConfigPath: path.resolve(__dirname, './tsconfig.json'),
});
```

If need override some rules, you can pass an argument to the function:

```js
const eslintFlatConfig = require('eslint-config-kubit');
const path = require('path');

module.exports = eslintFlatConfig({
  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      rules: {
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'react/no-multi-comp': 'off',
        complexity: 'off',
        'unused-imports/no-unused-imports': 'off',
        'compat/compat': 'off',
      },
    },
  ],
});
```

## License

APA License 2.0 © [Kubit](https://kubit-ui.com)
