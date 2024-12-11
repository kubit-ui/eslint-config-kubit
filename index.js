module.exports = ({
  noIndexImportConfig = {},
  noRestrictedImportsConfig,
  tsConfigPath = '',
}) => ({
  env: {
    browser: true, // Enable browser global variables
    es2021: true, // Enable ECMAScript 2021 features
    node: true, // Enable Node.js global variables and Node.js scoping
    jest: true, // Enable Jest global variables for testing
    commonjs: true, // Enable CommonJS global variables and CommonJS scoping
    es6: true, // Enable all ECMAScript 6 features except for modules
  },
  extends: [
    'eslint:recommended', // Use recommended ESLint rules
    'plugin:@typescript-eslint/recommended', // Use recommended rules from @typescript-eslint/eslint-plugin
    'plugin:react/recommended', // Use recommended rules from eslint-plugin-react
    'plugin:react-hooks/recommended', // Use recommended rules from eslint-plugin-react-hooks
    'plugin:jsx-a11y/recommended', // Use recommended rules from eslint-plugin-jsx-a11y
    'plugin:import/errors', // Use rules from eslint-plugin-import for import/export syntax
    'plugin:import/warnings', // Use warnings from eslint-plugin-import for import/export syntax
    'plugin:import/typescript', // Use TypeScript rules from eslint-plugin-import
    'plugin:prettier/recommended', // Use recommended rules from eslint-plugin-prettier
    'prettier', // Ensure Prettier rules are applied last to avoid conflicts
  ],
  parser: '@typescript-eslint/parser', // Specify the ESLint parser for TypeScript
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing
    },
    ecmaVersion: 2021, // Use the latest ECMAScript version
    sourceType: 'module', // Enable ECMAScript modules
    project: tsConfigPath, // Specify the path to the TypeScript configuration file
    tsconfigRootDir: __dirname, // Specify the root directory for the TypeScript configuration file
  },
  plugins: [
    '@typescript-eslint', // Add TypeScript plugin
    'react', // Add React plugin
    'react-hooks', // Add React Hooks plugin
    'jsx-a11y', // Add accessibility plugin
    'import', // Add import/export plugin
    'prettier', // Add Prettier plugin
    'unused-imports', // Add unused imports plugin
    'jest', // Add Jest plugin
    '@kubit-ui-web/no-index-import', // Add custom plugin for no-index-import
  ],
  rules: {
    // TypeScript rules
    '@typescript-eslint/no-unused-vars': 'error', // Disallow unused variables
    '@typescript-eslint/no-explicit-any': 'error', // Disallow usage of the any type
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'], // Enforce consistent usage of type definitions
    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      { allowArgumentsExplicitlyTypedAsAny: true },
    ], // Require explicit return and argument types on exported functions
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-expect-error': 'allow-with-description' },
    ], // Disallow @ts-<directive> comments except for @ts-expect-error with description
    '@typescript-eslint/no-empty-function': 'error', // Disallow empty functions
    '@typescript-eslint/no-duplicate-enum-values': 'off', // Allow duplicate enum values

    // React rules
    'react/react-in-jsx-scope': 'off', // React 17+ does not require React to be in scope
    'react/self-closing-comp': 'error', // Enforce self-closing tags for components without children
    'react/jsx-boolean-value': ['error', 'always'], // Enforce boolean attributes notation in JSX
    'react/jsx-fragments': ['error', 'syntax'], // Enforce shorthand or standard form for React fragments
    'react/jsx-no-useless-fragment': 'error', // Disallow unnecessary fragments
    'react/jsx-pascal-case': 'error', // Enforce PascalCase for user-defined JSX components
    'react/no-array-index-key': 'error', // Prevent usage of array index in keys
    'react/no-danger': 'error', // Prevent usage of dangerous JSX properties
    'react/no-multi-comp': 'error', // Prevent multiple component definitions per file
    'react/no-unused-state': 'error', // Prevent state fields from being unused
    'react/no-unstable-nested-components': 'error', // Prevent creating unstable components inside components
    'react/sort-comp': 'error', // Enforce component methods order
    'react/jsx-no-duplicate-props': 'error', // Prevent duplicate props in JSX
    'react/jsx-no-target-blank': 'error', // Prevent usage of unsafe target='_blank'
    'react/jsx-key': 'error', // Enforce key prop for elements in arrays or iterators
    'react/jsx-no-comment-textnodes': 'error', // Prevent comments from being inserted as text nodes
    'react/jsx-no-undef': 'error', // Disallow undeclared variables in JSX
    'react/jsx-uses-react': 'error', // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-vars': 'error', // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-wrap-multilines': 'error', // Enforce line breaks in JSX
    'react/jsx-indent': ['error', 2], // Enforce consistent indentation in JSX
    'react/jsx-indent-props': ['error', 2], // Enforce consistent indentation for props in JSX
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }], // Enforce spacing around the closing bracket of JSX tags
    'react/jsx-equals-spacing': ['error', 'never'], // Disallow spaces around equal signs in JSX attributes
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'], // Enforce the location of the closing bracket for multiline JSX elements
    'react/jsx-closing-tag-location': 'error', // Enforce the location of the closing tag for JSX elements
    'react/jsx-first-prop-new-line': ['error', 'multiline'], // Enforce the location of the first prop in JSX
    'react/jsx-max-props-per-line': ['error', { when: 'multiline' }], // Limit the number of props per line in JSX
    'react/jsx-props-no-multi-spaces': 'error', // Disallow multiple spaces between inline JSX props
    'react/jsx-sort-props': [
      'error',
      { callbacksLast: true, shorthandFirst: true, reservedFirst: true },
    ], // Enforce props alphabetical sorting
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }], // Enforce space before self-closing bracket in JSX
    // Prettier rule
    'prettier/prettier': ['error'], // Enforce Prettier formatting

    // General JavaScript rules
    curly: ['error', 'all'], // Enforce consistent brace style for all control statements
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ], // Enforce consistent use of trailing commas
    'jsx-quotes': ['error', 'prefer-double'], // Enforce the consistent use of double quotes in JSX attributes
    'no-cond-assign': ['error', 'always'], // Disallow assignment operators in conditional expressions
    'no-constant-condition': 'error', // Disallow constant expressions in conditions
    'no-debugger': 'error', // Disallow the use of debugger
    'no-useless-escape': 'error', // Disallow unnecessary escape characters
    'no-case-declarations': 'warn', // Disallow lexical declarations in case clauses
    'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }], // Disallow unnecessary boolean casts
    'no-extra-semi': 'error', // Disallow unnecessary semicolons
    'no-func-assign': 'error', // Disallow reassigning function declarations
    'no-inner-declarations': 'error', // Disallow variable or function declarations in nested blocks
    'no-undef': 'error', // Disallow the use of undeclared variables
    'no-unreachable': 'error', // Disallow unreachable code after return, throw, continue, and break statements
    'no-unused-vars': ['error', { args: 'none', ignoreRestSiblings: true }], // Disallow unused variables
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ], // Disallow the use of variables before they are defined
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ], // Enforce the consistent use of single quotes
    semi: ['error', 'always'], // Require or disallow semicolons instead of ASI
    eqeqeq: ['error', 'always', { null: 'ignore' }], // Require the use of === and !==
    complexity: ['error', { max: 5 }], // Enforce a maximum cyclomatic complexity allowed in a program
    'block-scoped-var': 'error', // Enforce the use of variables within the scope they are defined
    'no-else-return': ['error', { allowElseIf: false }], // Disallow return before else
    'no-eval': 'error', // Disallow the use of eval()
    'no-lone-blocks': 'error', // Disallow unnecessary nested blocks
    'no-multi-spaces': ['error', { ignoreEOLComments: false }], // Disallow multiple spaces
    'no-useless-return': 'error', // Disallow redundant return statements
    'no-var': 'error', // Require let or const instead of var
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }], // Require a newline after each call in a method chain

    // Accessibility rules
    'jsx-a11y/alt-text': 'error', // Enforce alt text on images
    'jsx-a11y/anchor-has-content': 'error', // Enforce anchor elements to contain accessible content
    'jsx-a11y/anchor-is-valid': 'error', // Enforce valid anchor elements
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error', // Enforce elements with aria-activedescendant are tabbable
    'jsx-a11y/aria-props': 'error', // Enforce all aria-* props are valid
    'jsx-a11y/aria-proptypes': 'error', // Enforce ARIA state and property values are valid
    'jsx-a11y/aria-role': 'error', // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role
    'jsx-a11y/aria-unsupported-elements': 'error', // Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes
    'jsx-a11y/click-events-have-key-events': 'error', // Enforce a clickable non-interactive element has at least one keyboard event listener
    'jsx-a11y/heading-has-content': 'error', // Enforce heading elements have content and are not empty
    'jsx-a11y/html-has-lang': 'error', // Enforce <html> element has a lang attribute
    'jsx-a11y/iframe-has-title': 'error', // Enforce iframe elements have a title attribute
    'jsx-a11y/img-redundant-alt': 'error', // Enforce <img> alt prop does not contain the word "image", "picture", or "photo"
    'jsx-a11y/interactive-supports-focus': 'error', // Enforce that elements with interactive handlers like onClick must be focusable
    'jsx-a11y/label-has-associated-control': 'error', // Enforce that <label> elements have the htmlFor attribute
    'jsx-a11y/lang': 'error', // Enforce lang attribute has a valid value
    'jsx-a11y/media-has-caption': 'error', // Enforce that media elements like <audio> and <video> must have a <track> for captions
    'jsx-a11y/mouse-events-have-key-events': 'error', // Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users
    'jsx-a11y/no-access-key': 'error', // Enforce that the accessKey prop is not used on any element
    'jsx-a11y/no-autofocus': 'error', // Enforce that autoFocus prop is not used on elements
    'jsx-a11y/no-distracting-elements': 'error', // Enforce that distracting elements are not used
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 'warn', // Enforce that interactive elements are not assigned non-interactive roles
    'jsx-a11y/no-noninteractive-element-interactions': 'error', // Enforce that non-interactive, visible elements (such as <div>) that have click handlers use role attribute
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'error', // Enforce that non-interactive elements are not assigned interactive roles
    'jsx-a11y/no-noninteractive-tabindex': 'error', // Enforce that tabIndex is not assigned to non-interactive elements
    'jsx-a11y/no-redundant-roles': 'error', // Enforce that redundant roles are not used
    'jsx-a11y/no-static-element-interactions': 'error', // Enforce that static elements (such as <div>) that have click handlers use role attribute
    'jsx-a11y/role-has-required-aria-props': 'error', // Enforce that elements with ARIA roles must have all required attributes for that role
    'jsx-a11y/role-supports-aria-props': 'error', // Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role
    'jsx-a11y/scope': 'error', // Enforce that <th> elements have a scope attribute
    'jsx-a11y/tabindex-no-positive': 'error', // Enforce that tabIndex value is not greater than zero

    // Custom rules
    '@kubit-ui-web/no-index-import/no-index-import': noIndexImportConfig
      ? [
          'error',
          {
            aliases: noIndexImportConfig?.aliases || {},
            ignoreImports: noIndexImportConfig?.ignoreImports || [],
          },
        ]
      : 'off', // Disallow importing index files
    'unused-imports/no-unused-imports': 'error', // Disallow unused imports
    'arrow-body-style': 'off', // Turn off enforcing arrow body style
    'prefer-arrow-callback': 'off', // Turn off enforcing arrow callback style
    'node/no-unpublished-import': 'off', // Turn off enforcing no unpublished imports
    'jest/no-test-prefixes': 'off', // Turn off enforcing no test prefixes in Jest
    'jest/no-focused-tests': 'error', // Disallow focused tests in Jest
    'no-throw-literal': 'error', // Disallow throwing literals as exceptions
    'import/no-cycle': ['error', { maxDepth: 4 }], // Disallow cyclic dependencies with a max depth of 4,
    'import/no-unresolved': 'off', // Turn off enforcing no unresolved imports
    'no-restricted-imports': [
      'error',
      {
        // Restrict certain imports based on the provided configuration
        paths: noRestrictedImportsConfig?.paths || [],
      },
    ],

    // Additional rules
    'no-console': 'error', // Disallow console.log
    'no-alert': 'error', // Disallow alert
    'no-shadow': 'error', // Disallow variable shadowing
    'no-duplicate-imports': 'error', // Disallow duplicate imports
    'no-param-reassign': 'error', // Disallow reassigning function parameters
    'prefer-const': 'error', // Prefer const over let
    'no-magic-numbers': 'error', // Disallow magic numbers
    'consistent-return': 'error', // Enforce consistent return statements
    'no-unneeded-ternary': 'error', // Disallow unnecessary ternary expressions
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Resolve these extensions
      },
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'], // Consider these extensions as modules
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'], // Use TypeScript parser for these extensions
    },
  },
});
