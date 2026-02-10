# Migration Guide to v2.0 (ESLint 10)

This guide will help you upgrade from `eslint-config-kubit` v1.x to v2.0, which adds support for ESLint 10.

## Overview

Version 2.0 introduces support for ESLint 10 with several breaking changes that require Node.js 20.19.0 or higher.

## Prerequisites

Before starting the migration, ensure you have:

- Node.js >= 20.19.0 installed
- Basic understanding of ESLint flat config format

## Migration Steps

### Step 1: Update Node.js

Ensure you're running Node.js 20.19.0 or higher:

```bash
node --version
# Should output v20.19.0 or higher
```

If you need to upgrade Node.js:

- Use [nvm](https://github.com/nvm-sh/nvm): `nvm install 20 && nvm use 20`
- Or download from [nodejs.org](https://nodejs.org/)

### Step 2: Update ESLint

Update ESLint to version 10.0.0 or higher:

```bash
# Using pnpm (recommended)
pnpm add -D eslint@^10.0.0

# Using npm
npm install --save-dev eslint@^10.0.0

# Using yarn
yarn add --dev eslint@^10.0.0
```

### Step 3: Update eslint-config-kubit

Update this package to version 2.0.0:

```bash
# Using pnpm (recommended)
pnpm add -D eslint-config-kubit@^2.0.0

# Using npm
npm install --save-dev eslint-config-kubit@^2.0.0

# Using yarn
yarn add --dev eslint-config-kubit@^2.0.0
```

### Step 4: Remove Obsolete Rules

**ESLint 10 now automatically tracks JSX references**, so the following rules are no longer needed:

- `react/jsx-uses-react`
- `react/jsx-uses-vars`

If you have custom overrides for these rules in your `eslint.config.js`, you can safely remove them:

```diff
// eslint.config.js
const eslintConfigKubit = require("eslint-config-kubit");

module.exports = eslintConfigKubit({
  // ... your config
  overrides: [
    {
      rules: {
-       "react/jsx-uses-react": "error",
-       "react/jsx-uses-vars": "error",
        // ... other rules
      }
    }
  ]
});
```

## Breaking Changes

### 1. Minimum Node.js Version

- **Previous**: Node.js >= 18.0.0
- **New**: Node.js >= 20.19.0

**Why**: ESLint 10 requires Node.js 20.19.0 or higher to take advantage of modern JavaScript features and security improvements.

### 2. ESLint Version Requirement

- **Previous**: ESLint >= 9.0.0
- **New**: ESLint >= 10.0.0

**Why**: This package has been updated to support ESLint 10's new features and improvements.

### 3. Old Config Format No Longer Supported

- The legacy `.eslintrc` / `.eslintrc.json` format is no longer supported
- Only the **flat config format** (`eslint.config.js`) is supported

**Note**: `eslint-config-kubit` has always used the flat config format, so this shouldn't affect existing users.

### 4. JSX Reference Tracking

ESLint 10 now automatically tracks JSX references, which means:

- **Better accuracy**: Fewer false positives with `no-unused-vars` for JSX components
- **Removed rules**: `react/jsx-uses-react` and `react/jsx-uses-vars` are obsolete and have been removed from the config

**Example**: Previously, this might incorrectly report `Card` as unused:

```jsx
import { Card } from "./components";

export function App() {
  return <Card title="Hello" />; // ESLint 10 now correctly tracks this reference
}
```

## What's Improved in v2.0

### Better JSX Support

Enhanced JSX reference tracking eliminates false positives in `no-unused-vars`, providing a more accurate linting experience for React applications.

### Performance Improvements

ESLint 10 brings significant performance improvements and better error reporting, making your development workflow faster and more efficient.

### Enhanced Type Safety

Improved TypeScript integration with the latest parser versions ensures better type checking and IntelliSense support.

## Verification

After completing the migration, verify everything works:

```bash
# Run ESLint on your project
pnpm eslint .

# Or with npm/yarn
npm run lint
yarn lint
```

If you encounter any issues, check that:

1. Node.js version is 20.19.0 or higher: `node --version`
2. ESLint version is 10.0.0 or higher: `pnpm list eslint`
3. You're using `eslint.config.js` (not `.eslintrc`)

## Rollback

If you need to rollback to v1.x:

```bash
# Downgrade to previous versions
pnpm add -D eslint@^9.0.0 eslint-config-kubit@^1.7.1
```

**Note**: You may also need to downgrade Node.js if you upgraded specifically for this migration.

## Getting Help

If you encounter issues during migration:

- **Issues**: [GitHub Issues](https://github.com/kubit-ui/eslint-config-kubit/issues)
- **Documentation**: [README.md](./README.md)
- **Changelog**: [CHANGELOG.md](./CHANGELOG.md)

## References

- [ESLint v10 Migration Guide](https://eslint.org/docs/latest/use/migrate-to-10.0.0)
- [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files)
- [Kubit UI Components](https://github.com/kubit-ui/kubit-react-components)
