# Kubit ESLint Configuration

<div align="center">

[![npm version](https://img.shields.io/npm/v/eslint-config-kubit.svg)](https://www.npmjs.com/package/eslint-config-kubit)
[![npm downloads](https://img.shields.io/npm/dm/eslint-config-kubit.svg)](https://www.npmjs.com/package/eslint-config-kubit)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![CI Status](https://github.com/kubit-ui/eslint-config-kubit/actions/workflows/pr-validation.yml/badge.svg)](https://github.com/kubit-ui/eslint-config-kubit/actions)

**A comprehensive and opinionated ESLint configuration package for TypeScript and React projects**

Designed to enforce best practices, code quality, and accessibility standards.

[Installation](#-installation) • [Quick Start](#-quick-start) • [Configuration](#️-configuration-options) • [Documentation](#-documentation) • [Contributing](CONTRIBUTING.md)

</div>

---

## ✨ Features

- **🔧 Zero Configuration**: Works out of the box with sensible defaults
- **⚛️ React Support**: Complete React and JSX rules with accessibility (a11y) checks
- **🔷 TypeScript First**: Full TypeScript support with strict type checking
- **🎨 Prettier Integration**: Seamless integration with Prettier for code formatting
- **🧪 Jest Integration**: Pre-configured Jest rules for testing environments
- **♿ Accessibility**: Comprehensive a11y rules for inclusive web development
- **🌐 Browser Compatibility**: Optional browser compatibility checking
- **📦 Import Management**: Smart import sorting and organization
- **🔍 Code Quality**: Advanced rules for code complexity and best practices

## 📋 Requirements

- **Node.js**: >= 18.0.0 (recommended: 22.x)
- **pnpm**: >= 9.0.0 (recommended: 10.28.2)
- **ESLint**: >= 9.0.0

## 📦 Installation

Install the package and its peer dependencies:

```bash
# Using pnpm (recommended)
pnpm add -D eslint eslint-config-kubit

# Using npm
npm install --save-dev eslint eslint-config-kubit

# Using yarn
yarn add --dev eslint eslint-config-kubit
```

## 🚀 Quick Start

### Basic Usage

Create an `eslint.config.js` file in your project root:

```js
const eslintConfigKubit = require("eslint-config-kubit");

module.exports = eslintConfigKubit();
```

That's it! You now have a fully configured ESLint setup with TypeScript, React, and accessibility support.

### Advanced Configuration

For more control over the configuration:

```js
const eslintConfigKubit = require("eslint-config-kubit");
const path = require("path");

module.exports = eslintConfigKubit({
  // TypeScript configuration
  tsConfigPath: path.resolve(__dirname, "./tsconfig.json"),

  // Enable browser compatibility checks
  checkBrowserCompatibility: true,
  browserList: [
    "> 0.5%",
    "last 2 versions",
    "Firefox ESR",
    "not dead",
    "iOS >= 10",
    "Safari >= 10",
    "Edge >= 15",
  ],

  // Custom import rules
  noIndexImportConfig: {
    aliases: {
      "@/types": "./src/types/*",
      "@/components": "./src/components/*",
      "@/utils": "./src/utils/*",
    },
  },

  // Restrict specific imports
  noRestrictedImportsConfig: {
    paths: ["lodash", "moment"],
  },

  // Additional global variables
  globals: {
    myGlobalVar: "readonly",
  },
});
```

## ⚙️ Configuration Options

| Option                      | Type       | Default                                       | Description                             |
| --------------------------- | ---------- | --------------------------------------------- | --------------------------------------- |
| `isReact`                   | `boolean`  | `true`                                        | Enable React-specific rules and plugins |
| `tsConfigPath`              | `string`   | `''`                                          | Path to TypeScript configuration file   |
| `checkBrowserCompatibility` | `boolean`  | `false`                                       | Enable browser compatibility checking   |
| `browserList`               | `string[]` | `['> 1%', 'last 2 versions', 'not ie <= 11']` | Supported browsers list                 |
| `noIndexImportConfig`       | `object`   | `{}`                                          | Configuration for index import rules    |
| `noRestrictedImportsConfig` | `object`   | `undefined`                                   | Restricted imports configuration        |
| `globals`                   | `object`   | `undefined`                                   | Additional global variables             |
| `additionalPlugins`         | `object`   | `{}`                                          | Extra ESLint plugins to include         |
| `overrides`                 | `array`    | `[]`                                          | Configuration overrides                 |

## Configuration Examples

### Basic TypeScript Project

```js
// eslint.config.js
const eslintConfigKubit = require("eslint-config-kubit");

module.exports = eslintConfigKubit({
  tsConfigPath: "./tsconfig.json",
});
```

### React TypeScript Project

```js
// eslint.config.js
const eslintConfigKubit = require("eslint-config-kubit");

module.exports = eslintConfigKubit({
  isReact: true,
  tsConfigPath: "./tsconfig.json",
  noIndexImportConfig: {
    aliases: {
      "@/components": "./src/components/*",
      "@/utils": "./src/utils/*",
      "@/hooks": "./src/hooks/*",
    },
  },
});
```

### Node.js Project (No React)

```js
// eslint.config.js
const eslintConfigKubit = require("eslint-config-kubit");

module.exports = eslintConfigKubit({
  isReact: false,
  tsConfigPath: "./tsconfig.json",
});
```

### With Browser Compatibility Checks

```js
// eslint.config.js
const eslintConfigKubit = require("eslint-config-kubit");

module.exports = eslintConfigKubit({
  checkBrowserCompatibility: true,
  browserList: [
    "> 0.5%",
    "last 2 versions",
    "Firefox ESR",
    "not dead",
    "iOS >= 10",
    "Safari >= 10",
  ],
  tsConfigPath: "./tsconfig.json",
});
```

### Restricted Imports Configuration

```js
// eslint.config.js
const eslintConfigKubit = require("eslint-config-kubit");

module.exports = eslintConfigKubit({
  noRestrictedImportsConfig: {
    paths: [
      "lodash", // Use lodash-es instead
      "moment", // Use date-fns instead
      {
        name: "react",
        importNames: ["default"],
        message: 'Import React as named import: import { React } from "react"',
      },
    ],
  },
});
```

## �🔧 Customization

### Overriding Rules

You can override specific rules for your project needs:

```js
const eslintConfigKubit = require("eslint-config-kubit");

module.exports = eslintConfigKubit({
  overrides: [
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      rules: {
        // Disable magic number warnings for constants
        "@typescript-eslint/no-magic-numbers": "off",

        // Allow multiple components per file in specific cases
        "react/no-multi-comp": "off",

        // Relax complexity requirements for legacy code
        complexity: ["warn", { max: 10 }],
      },
    },
    {
      files: ["**/*.test.{js,jsx,ts,tsx}", "**/*.spec.{js,jsx,ts,tsx}"],
      rules: {
        // Allow any types in test files
        "@typescript-eslint/no-explicit-any": "off",

        // Allow console.log in tests
        "no-console": "off",
      },
    },
  ],
});
```

### Non-React Projects

For pure TypeScript/JavaScript projects without React:

```js
const eslintConfigKubit = require("eslint-config-kubit");

module.exports = eslintConfigKubit({
  isReact: false,
  tsConfigPath: "./tsconfig.json",
});
```

## 🛠️ Development Setup

### Usage in Your Project

Add linting scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
    "lint:cache": "eslint . --ext .js,.jsx,.ts,.tsx --cache"
  }
}
```

Then run:

```bash
# Check for linting errors
pnpm lint

# Automatically fix linting errors
pnpm lint:fix

# Use cache for faster linting
pnpm lint:cache
```

### VS Code Integration

Create `.vscode/settings.json` for better integration:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "eslint.experimental.useFlatConfig": true
}
```

### GitHub Actions Workflow

Add ESLint checking to your CI/CD:

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  lint:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: "22"
          registry-url: "https://registry.npmjs.org"

      - uses: pnpm/action-setup@v4

      - name: Get pnpm store directory
        shell: bash
        run: |
          echo "STORE_PATH=$(pnpm store path --silent)" >> $GITHUB_ENV

      - uses: actions/cache@v4
        with:
          path: ${{ env.STORE_PATH }}
          key: ${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}
          restore-keys: |
            ${{ runner.os }}-pnpm-store-

      - run: pnpm install --frozen-lockfile
      - run: pnpm lint
      - run: pnpm type-check
```

## �📋 Included Rules

This configuration includes rules from the following ESLint plugins:

- **[@typescript-eslint](https://typescript-eslint.io/)** - TypeScript-specific linting rules
- **[eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)** - React specific linting rules
- **[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)** - Rules of Hooks
- **[eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)** - Accessibility rules
- **[eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)** - Import/export syntax rules
- **[eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)** - Prettier integration
- **[eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)** - Jest testing rules
- **[eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist)** - Sorting and organization rules

## Migration Guide

### From v0.x to v1.0.0

Version 1.0.0 introduces several breaking changes:

#### ESLint Flat Config

- **Required**: ESLint 9.x with flat config format
- **Change**: Update your `eslint.config.js` file format

**Before (v0.x):**

```js
module.exports = {
  extends: ["eslint-config-kubit"],
};
```

**After (v1.0.0):**

```js
const eslintConfigKubit = require("eslint-config-kubit");

module.exports = eslintConfigKubit();
```

#### Dependency Updates

- **Node.js**: Minimum version is now 18.0.0
- **TypeScript**: Support for TypeScript 5.x
- **React**: Support for React 18+

#### Configuration Changes

- Parameter structure has been simplified
- Better default values for all options
- Improved TypeScript integration

## 🤝 Contributing

We welcome contributions! This project uses **pnpm** for package management and follows a fork-based contribution workflow.

### Quick Contribution Guide

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/YOUR_USERNAME/eslint-config-kubit.git`
3. **Install dependencies**: `pnpm install`
4. **Create a branch**: `git checkout -b feat/amazing-feature`
5. **Make your changes** to the ESLint configuration
6. **Test thoroughly** with sample projects
7. **Commit**: `git commit -m 'feat(rules): add amazing feature'`
8. **Push**: `git push origin feat/amazing-feature`
9. **Open a Pull Request** from your fork

For detailed guidelines, see our [Contributing Guide](CONTRIBUTING.md).

### Development Commands

```bash
# Install dependencies
pnpm install

# Add a changeset (for version management)
pnpm changeset

# Check changeset status
pnpm changeset:status

# Link for local testing
pnpm link --global

# Test in another project
cd /path/to/test-project
pnpm link --global eslint-config-kubit
```

### Release Process

This project uses **Changesets** for automated releases:

1. Contributors add changesets to their PRs
2. A "Version Packages" PR is automatically created
3. When merged, packages are published to NPM automatically
4. Changelog is generated from changeset descriptions

## 📚 Documentation

- [Full Documentation](https://www.kubit-ui.com/)
- [Contributing Guide](CONTRIBUTING.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Security Policy](SECURITY.md)
- [Changelog](CHANGELOG.md)

## 📖 Related Packages

- **[@kubit-ui-web/react-components](https://www.npmjs.com/package/@kubit-ui-web/react-components)** - Kubit React component library
- **[@kubit-ui-web/design-system](https://www.npmjs.com/package/@kubit-ui-web/design-system)** - Kubit design system
- **[eslint](https://eslint.org/)** - The core ESLint linting library
- **[typescript](https://www.typescriptlang.org/)** - TypeScript compiler
- **[prettier](https://prettier.io/)** - Code formatter

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## ❓ Troubleshooting

### Common Issues

#### "Cannot find module 'eslint-config-kubit'"

Make sure you've installed the package:

```bash
npm install --save-dev eslint-config-kubit
```

#### "Parsing error" with TypeScript files

Ensure you've set the correct `tsConfigPath`:

```js
module.exports = eslintConfigKubit({
  tsConfigPath: "./tsconfig.json", // Path relative to your project root
});
```

#### Rules are too strict

You can override specific rules:

```js
module.exports = eslintConfigKubit({
  overrides: [
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      rules: {
        complexity: ["warn", { max: 10 }], // Increase complexity limit
        "@typescript-eslint/no-magic-numbers": "off", // Disable magic numbers
      },
    },
  ],
});
```

### Performance Tips

- **Use `.eslintignore`**: Exclude `node_modules`, `dist`, and other build folders
- **Limit file patterns**: Only lint files you need to check
- **Use caching**: Add `--cache` flag to ESLint commands

## 🎯 Roadmap

- [ ] ESLint 10.x compatibility when released
- [ ] Additional framework support (Vue, Svelte)
- [ ] Custom rule presets for different project types
- [ ] Performance optimizations for large codebases
- [ ] Enhanced TypeScript 5.x support
- [ ] Improved monorepo configurations

## 🤝 Support

- 📖 [Documentation](https://www.kubit-ui.com/)
- 🐛 [Report Issues](https://github.com/kubit-ui/eslint-config-kubit/issues)
- 💬 [Discussions](https://github.com/kubit-ui/eslint-config-kubit/discussions)
- ⭐ [Give us a star](https://github.com/kubit-ui/eslint-config-kubit) if this project helped you!

## 📈 Stats

<div align="center">

![npm downloads](https://img.shields.io/npm/dt/eslint-config-kubit?style=flat-square)
![npm version](https://img.shields.io/npm/v/eslint-config-kubit?style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/kubit-ui/eslint-config-kubit?style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/kubit-ui/eslint-config-kubit?style=flat-square)
![License](https://img.shields.io/github/license/kubit-ui/eslint-config-kubit?style=flat-square)

</div>

---

<div align="center">

**Made with ❤️ by the [Kubit Team](https://www.kubit-ui.com/)**

If this project helped you, please consider giving it a ⭐ on [GitHub](https://github.com/kubit-ui/eslint-config-kubit)!

</div>
