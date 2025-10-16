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
   - Test your changes thoroughly using `npm test`

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

| Branch Pattern | Version Bump | Example | Description |
|----------------|--------------|---------|-------------|
| `feat/` or `feature/` | **MINOR** | `feat/typescript-rules` | New ESLint rules or configurations |
| `fix/` or `bugfix/` | **PATCH** | `fix/rule-conflict` | Bug fixes in rule configurations |
| `break/` or `breaking/` | **MAJOR** | `break/remove-deprecated-rules` | Breaking configuration changes |
| `hotfix/` | **PATCH** | `hotfix/critical-rule-error` | Urgent rule fixes |
| `chore/` | **PATCH** | `chore/update-eslint-version` | Maintenance tasks |

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