# Changelog

## 2.0.0

### Major Changes

**BREAKING CHANGES:**

- **Require Node.js >=20.19.0** (previously >=18.0.0)
- **Require ESLint ^10.0.0** (previously ^9.0.0)
- **Remove obsolete JSX tracking rules** (`react/jsx-uses-react`, `react/jsx-uses-vars`)

### Changes

- Add comprehensive MIGRATION.md guide
- Update package.json to v2.0.0
- Update README.md with new requirements
- ESLint 10 now automatically tracks JSX references

### Benefits

- Better JSX reference tracking eliminates false positives in `no-unused-vars`
- Performance improvements from ESLint 10
- Enhanced TypeScript integration with latest parser versions

## 1.7.1

### Patch Changes

- **Modify changelog showing links**

## 1.7.0

### Minor Changes

- 55258f5: include changeset

## 1.6.0

### Minor Changes

- 5371dcf: include changeset

## 1.5.0

### Minor Changes

- **Include changeset**
- **Include changeset**

All notable changes to this project will be documented in this file.

The format uses [Changesets](https://github.com/changesets/changesets) with a custom formatter for clean, professional changelog entries without technical noise.

## 1.4.0

### Minor Changes

- **Include changeset in workflow**
  Automated version management and changelog generation

- **Include changeset in workflow**
  Automated version management and changelog generation

## 1.3.0

### Added

- **Automatic Changesets integration** - Fully automated version management and changelog generation
- **Auto-release workflow** - Detects version bump from branch name, generates changeset, and publishes automatically
- **Smart version detection** - Branch naming (feat/, fix/, break/) determines version bump type
- **pnpm support** - Full migration to pnpm as the recommended package manager
- **pnpm configuration** - New `.npmrc` file with optimized pnpm settings
- **GitHub Actions cache** - Improved CI/CD performance with pnpm store caching
- **Enhanced documentation** - Comprehensive updates to README.md and CONTRIBUTING.md
- **Development guidelines** - Detailed setup instructions for contributors using pnpm
- **Quick navigation** - Added navigation links in README header for better UX
- **Stats section** - Improved badges and statistics display in README

### Changed

- **Package manager** - Migrated from npm/yarn to pnpm (v10.28.2)
- **Node.js version** - Updated workflows to use Node.js v22
- **Workflows updated** - Both `auto-publish.yml` and `pr-validation.yml` now use pnpm
- **Installation commands** - All documentation updated to recommend pnpm first
- **CI/CD optimization** - Implemented pnpm store caching for faster builds
- **README structure** - Reorganized with centered header, better sections, and improved navigation
- **Contributing guide** - Enhanced with pnpm-specific instructions and development setup
- **Requirements section** - Clarified Node.js 18+ and pnpm 9+ requirements
- **GitHub Actions examples** - Updated with pnpm setup and caching configuration

### Improved

- **Documentation quality** - More detailed examples and clearer instructions
- **Developer experience** - Faster dependency installation with pnpm
- **Build performance** - Optimized CI/CD pipelines with proper caching
- **Code organization** - Better structured documentation with clear sections
- **Related packages** - Added links to @kubit-ui-web/react-components and design-system

### Technical Details

- **Changesets packages** - Added @changesets/cli for version management
- **Custom changelog formatter** - Created .changeset/changelog-formatter.js for clean, professional changelog entries
- **Changeset configuration** - Created .changeset/config.json with custom formatter integration
- **Changeset scripts** - Added changeset, changeset:version, changeset:publish, changeset:status
- **Auto-release workflow** - New .github/workflows/auto-release.yml for fully automated publishing
- **Version detection** - Automatic detection from branch naming patterns (feat/, fix/, break/)
- **Auto-changeset generation** - Creates changesets automatically from PR title if not provided manually
- **Manual workflows** - Moved release.yml and changeset-bot.yml to .manual/.optional for reference
- **Deprecated workflow** - Renamed auto-publish.yml to auto-publish.yml.deprecated
- **packageManager field** - Added `"packageManager": "pnpm@10.28.2"` to package.json
- **Engine requirements** - Updated to require pnpm >= 9.0.0
- **Lock file** - Replaced yarn.lock and package-lock.json with pnpm-lock.yaml
- **.gitignore updates** - Added pnpm-specific ignore patterns
- **Workflow caching** - Implemented pnpm store path caching in GitHub Actions

## 1.2.0 - 2025-10-28

### Added

- **Global ignores configuration** - New `ignores` parameter allows specifying files, patterns, or directories that ESLint should ignore
- **Enhanced configuration flexibility** - Support for glob patterns, specific files, and directory exclusions
- **Improved JSDoc documentation** - Updated parameter documentation to include the new `ignores` option

### Changed

- **Configuration API enhancement** - Added `ignores` array parameter to the main configuration function
- **Better ESLint flat config compliance** - Proper implementation of global ignores following ESLint 9.x standards

## 1.0.1 - 2025-10-16

### Added

- New workflow for review Pull Requests

## 1.0.0 - 2025-10-15

**Major Release** - Production Ready ESLint Configuration

### Added

- **Professional documentation** with detailed usage examples and configuration options
- **Contributing guidelines** (`CONTRIBUTING.md`) for open source collaboration
- **Example configurations** for different project types (React, Node.js, etc.)
- **Browser compatibility checking** with configurable browser support lists
- **Advanced import management** with sorting and cycle detection
- **Accessibility rules** (a11y) for inclusive web development
- **Jest testing rules** for better test code quality
- **Code organization rules** with perfectionist plugin integration
- **Enhanced error handling** for configuration edge cases
- **Simplified package structure** - Focused on essential files: `index.js`, `README.md`, `LICENSE`, and `CHANGELOG.md`

### Changed

- **Complete code refactoring** with improved maintainability and readability
- **Modular rule organization** using helper functions for better code structure
- **Enhanced package.json** with proper metadata and exports configuration (no build/test scripts for simplicity)
- **Improved dependency management** with cleaner peer dependencies
- **Better configuration API** with proper default values and optional parameters
- **Optimized plugin loading** for better performance
- **Updated documentation** with comprehensive examples and best practices
- **Lightweight package** - No TypeScript definitions or test suite for faster installation

### Fixed

- **Configuration loading issues** with proper parameter handling
- **TypeScript integration** with correct parser and plugin configurations
- **Rule conflicts** between different plugins resolved
- **Import resolution** for various project structures
- **Browser compatibility** checks working correctly
- **Test suite** passing all scenarios

### Technical Improvements

- **ESLint 9.x flat config** full compatibility
- **TypeScript 5.x** support with latest features
- **React 18+** rules and hooks support
- **Node.js 18+** compatibility with modern features
- **Prettier integration** with consistent formatting
- **Performance optimizations** for large codebases

### Security

- **Updated all dependencies** to latest secure versions
- **Removed vulnerable packages** and replaced with secure alternatives
- **Enhanced security rules** for preventing common vulnerabilities

### Documentation

- **Complete README rewrite** with examples and best practices
- **Comprehensive usage documentation** with practical examples
- **Contributing guide** for community involvement
- **Changelog** following standard conventions
- **License clarification** with Apache 2.0

### Configuration

- **Comprehensive ESLint rules** covering all major use cases
- **Plugin integration** for enhanced code quality
- **Rule validation** for consistent configurations
