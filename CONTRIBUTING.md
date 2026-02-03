## Contributing

We welcome contributions to **eslint-config-kubit**! This project is open source and we encourage community participation through **forks and pull requests**. All contributions must be made through the fork workflow - we do not accept direct pushes to the main repository.

### Why Fork-Based Contributing?

This project follows the **fork-based contribution model** to:

- Maintain code quality and security
- Ensure all changes are reviewed before merging
- Keep the main repository clean and stable
- Allow contributors to work independently on features

### Development Workflow

1. **Fork the Repository**: Click the "Fork" button in the upper right corner of the [eslint-config-kubit repository](https://github.com/kubit-ui/eslint-config-kubit) on GitHub. This will create a copy of the repository in your GitHub account.

2. **Clone Your Fork**: Clone your forked repository to your local machine (not the original repository).

   ```sh
   git clone https://github.com/your-username/eslint-config-kubit.git
   cd eslint-config-kubit
   ```

3. **Add Original Repository as Upstream**: Add the original repository as a remote to keep your fork synchronized.

   ```sh
   git remote add upstream https://github.com/kubit-ui/eslint-config-kubit.git
   git fetch upstream
   ```

4. **Create a Feature Branch**: Always create a new branch for your changes. Use proper branch naming conventions for automatic version detection.

   ```sh
   git checkout -b <branch-type>/<branch-name>
   ```

5. **Make Changes**:
   - Make your changes to the eslint-config-kubit codebase
   - Follow the coding standards outlined in our style guide
   - Add or update tests for your changes
   - Update documentation if necessary
   - Test your changes thoroughly using `pnpm test`

6. **Commit Changes**: Use conventional commit messages for automatic versioning.

   ```sh
   git commit -m "feat(rules): add new TypeScript specific eslint rules"
   ```

7. **Keep Your Fork Updated**: Before pushing, sync with the upstream repository.

   ```sh
   git fetch upstream
   git rebase upstream/main
   ```

8. **Push to Your Fork**: Push your changes to your forked repository (never to the original).

   ```sh
   git push origin <branch-name>
   ```

9. **Open a Pull Request**:
   - Go to the original [eslint-config-kubit repository](https://github.com/kubit-ui/eslint-config-kubit)
   - Click "New pull request"
   - Select "compare across forks"
   - Choose your fork and branch as the source
   - Fill out the PR template with details about your changes
   - Submit the pull request for review

### Branch Naming & Automatic Publishing

This repository uses an **automatic publishing system** that determines the version bump based on your branch name and PR content. When your PR is merged, the package will be automatically published to NPM.

#### Branch Naming Patterns

Use these branch prefixes for eslint-config-kubit to ensure automatic publishing works correctly:

| Branch Pattern          | Version Bump | Example                         | Description                        |
| ----------------------- | ------------ | ------------------------------- | ---------------------------------- |
| `feat/` or `feature/`   | **MINOR**    | `feat/typescript-rules`         | New ESLint rules or configurations |
| `fix/` or `bugfix/`     | **PATCH**    | `fix/rule-conflict`             | Bug fixes in rule configurations   |
| `break/` or `breaking/` | **MAJOR**    | `break/remove-deprecated-rules` | Breaking configuration changes     |
| `hotfix/`               | **PATCH**    | `hotfix/critical-rule-error`    | Urgent rule fixes                  |
| `chore/`                | **PATCH**    | `chore/update-eslint-version`   | Maintenance tasks                  |

#### Advanced Version Detection

The system also analyzes your **PR title** and **description** for more precise version detection:

##### MAJOR (Breaking Changes)

- `BREAKING CHANGE:` in PR description
- `!` in PR title (e.g., `feat!: redesign button API`)
- `[breaking]` tag in PR title
- Conventional commits with `!` (e.g., `feat(api)!: change interface`)

##### MINOR (New Features)

- PR titles starting with `feat:` or `feature:`
- `[feature]` tag in PR title
- Conventional commits like `feat(rules): add TypeScript strict mode configuration`

##### PATCH (Bug Fixes & Others)

- PR titles starting with `fix:` or `bugfix:`
- All other changes (default behavior)
- Conventional commits like `fix(config): resolve rule conflict with prettier`

#### Examples for eslint-config-kubit

**Adding new ESLint rules:**

```sh
git checkout -b feat/typescript-strict-rules
# Make your changes in your fork
git commit -m "feat(rules): add TypeScript strict mode rules for better type safety"
# Create PR with title: "feat(rules): add TypeScript strict mode rules"
# Result: MINOR version bump (e.g., 1.0.0 → 1.1.0)
```

**Fixing a rule configuration issue:**

```sh
git checkout -b fix/prettier-conflict
# Make your changes in your fork
git commit -m "fix(config): resolve conflict between ESLint and Prettier rules"
# Create PR with title: "fix(config): resolve ESLint-Prettier conflict"
# Result: PATCH version bump (e.g., 1.0.0 → 1.0.1)
```

**Breaking configuration changes:**

```sh
git checkout -b break/remove-deprecated-rules
# Make your changes in your fork
git commit -m "feat!: remove deprecated ESLint rules and update configuration structure"
# Create PR with title: "feat!: remove deprecated rules and restructure config"
# PR description: "BREAKING CHANGE: Deprecated ESLint rules have been removed and configuration structure has changed..."
# Result: MAJOR version bump (e.g., 1.0.0 → 2.0.0)
```

### Important Notes for Contributors

- **Never push directly** to the main eslint-config-kubit repository
- Always work on **your own fork** and create pull requests
- Keep your fork **synchronized** with the upstream repository
- **Test your ESLint configuration** thoroughly before submitting
- Include **examples and documentation** of new rules in your PR
- Update **README.md** with new configuration options
- Follow the existing **code style** and patterns used in the project

### Requirements

Before contributing, ensure you have the following installed:

- **Node.js**: v18.x or higher (recommended: v22.x)
- **pnpm**: v9.x or higher (recommended: v10.28.2)
- **Git**: Latest version

You can check your versions with:

```sh
node --version  # Should show v18.x.x or higher
pnpm --version  # Should show 9.x.x or higher
```

#### Installing pnpm

Using **npm** (if you have Node.js installed):

```sh
npm install -g pnpm@latest
```

Using **Corepack** (recommended, comes with Node.js 16.13+):

```sh
corepack enable
corepack prepare pnpm@latest --activate
```

For other installation methods, visit [pnpm.io/installation](https://pnpm.io/installation)

### Development Setup

Before contributing, make sure you have the development environment set up:

```sh
# Install dependencies
pnpm install

# Run tests (if available)
pnpm test

# Lint your code
pnpm lint

# Test the configuration in a sample project
# Create a test project and link your local eslint-config-kubit
pnpm link --global
cd /path/to/test-project
pnpm link --global eslint-config-kubit
```

### Testing Your Changes

Before submitting your PR:

1. **Test the configuration**: Create a sample project and test your ESLint rules
2. **Verify no conflicts**: Ensure rules don't conflict with each other
3. **Check documentation**: Update README.md with any new options
4. **Test with TypeScript**: Verify TypeScript rules work correctly
5. **Test with React**: If applicable, test React-specific rules
6. **Validate examples**: Ensure all code examples in docs are correct

### Code Review Process

Once you submit your PR:

1. **Automated Checks**: GitHub Actions will run validation workflows
2. **Code Review**: Maintainers will review your configuration changes
3. **Feedback**: Address any requested changes
4. **Approval**: Once approved, your PR will be merged
5. **Auto-publish**: The package will be automatically published to NPM

### Getting Help

If you need help or have questions:

- Check the [README](./README.md) for documentation
- Review existing rules and patterns in `index.js`
- Open an issue for discussion before major changes
- Tag maintainers in your PR for guidance

### Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](./CODE_OF_CONDUCT.md). Please be respectful and inclusive in all interactions.

### License

By contributing to eslint-config-kubit, you agree that your contributions will be licensed under the [Apache 2.0 License](./LICENSE).
