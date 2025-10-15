# Contributing to Kubit ESLint Configuration

We love your input! We want to make contributing to Kubit ESLint Configuration as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## Pull Requests Process

Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. **Fork the repo** and create your branch from `main`.
2. **Add tests** if you've added code that should be tested.
3. **Update the documentation** if you've changed APIs.
4. **Ensure the test suite passes** by running `npm test`.
5. **Make sure your code lints** by running `npm run lint`.
6. **Issue that pull request!**

## Local Development Setup

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0

### Installation

```bash
# Clone the repository
git clone https://github.com/kubit-ui/eslint-config-kubit.git
cd eslint-config-kubit

# Install dependencies
npm install

# Run tests
npm test

# Run linting
npm run lint
```

### Testing Your Changes

Before submitting your changes, make sure to:

1. **Run the test suite**:
   ```bash
   npm test
   ```

2. **Test with your own project**:
   ```bash
   # In your test project
   npm install /path/to/eslint-config-kubit
   ```

3. **Verify ESLint integration**:
   ```bash
   npx eslint . --config ./eslint.config.js
   ```

## Code Style Guidelines

- **Follow existing patterns**: Look at existing code and follow the same patterns
- **Use meaningful names**: Variables and functions should have descriptive names
- **Add comments**: Complex logic should be well documented
- **Keep it simple**: Avoid over-engineering solutions

## Adding New Rules

When adding new ESLint rules:

1. **Categorize appropriately**: Add rules to the correct helper function (`getTypeScriptRules`, `getReactRules`, etc.)
2. **Provide documentation**: Include clear comments explaining what the rule does
3. **Consider backwards compatibility**: New rules should generally be warnings before becoming errors
4. **Test thoroughly**: Ensure the rule works as expected with different code patterns

### Example: Adding a New TypeScript Rule

```javascript
// In getTypeScriptRules() function
'@typescript-eslint/new-rule': 'warn', // Brief description of what this rule enforces
```

## Reporting Issues

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/kubit-ui/eslint-config-kubit/issues/new).

### Bug Reports Should Include:

- **Clear title**: Summarize the issue in the title
- **Description**: A clear description of what the bug is
- **Steps to reproduce**: Detailed steps to reproduce the behavior
- **Expected behavior**: What you expected to happen
- **Environment**: 
  - ESLint version
  - Node.js version
  - Operating system
  - Project configuration

### Example Bug Report

```markdown
**Description**
ESLint rule X is not working properly with TypeScript interfaces

**Steps to Reproduce**
1. Create a TypeScript file with interface
2. Run eslint with kubit config
3. Rule X should trigger but doesn't

**Expected Behavior**
Rule X should report an error for invalid interface usage

**Environment**
- ESLint: 9.31.0
- Node.js: 18.17.0
- OS: macOS 13.4
```

## Feature Requests

We welcome feature requests! Please provide:

- **Clear use case**: Why is this feature needed?
- **Detailed description**: What should the feature do?
- **Examples**: Code examples showing how it would work
- **Alternatives considered**: What other approaches did you consider?

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/kubit-ui/eslint-config-kubit/tags).

## License

By contributing, you agree that your contributions will be licensed under the Apache License 2.0.

## Questions?

Feel free to contact us:
- 📖 [Documentation](https://www.kubit-ui.com/)
- 🐛 [Issues](https://github.com/kubit-ui/eslint-config-kubit/issues)
- 💬 [Discussions](https://github.com/kubit-ui/eslint-config-kubit/discussions)

## Recognition

Contributors will be recognized in our [README](README.md) and release notes. Thank you for making this project better! 🎉