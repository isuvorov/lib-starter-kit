const rules = {
  'max-len': [
    'error',
    {
      code: 120,
      ignoreComments: true,
    },
  ],
  'class-methods-use-this': 'off',
  'global-require': 'off',
  'lines-between-class-members': 'off',
  'func-names': 'off',
  'no-underscore-dangle': 'off',
  'no-throw-literal': 'off',
  //
  'react/prop-types': 'error',
  'react/forbid-prop-types': 'error',

  'react/state-in-constructor': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-filename-extension': [
    1,
    {
      extensions: ['.jsx', '.tsx'],
    },
  ],
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],
  // [
  //   'error',
  //   'ignorePackages',
  //   {
  //     js: 'never',
  //     jsx: 'never',
  //     ts: 'never',
  //     tsx: 'never',
  //   },
  // ],
  'import/no-extraneous-dependencies': [
    'error',
    { devDependencies: false, optionalDependencies: true, peerDependencies: true },
  ],
  '@typescript-eslint/no-explicit-any': 'warn',
};

const eslint = {
  env: {
    browser: false,
    node: true,
  },
  extends: [
    // 'eslint:recommended',
    'airbnb-base',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'simple-import-sort', 'prettier'],
  globals: {
    __SERVER__: true,
    __CLIENT__: true,
    __DEV__: true,
    __STAGE__: true,
  },
  rules,
  // settings: {
  //   'import/resolver': {
  //     typescript: {
  //       // always try to resolve types under `<root>@types` directory even it doesn't contain any source code,
  //       // like `@types/unist`
  //       alwaysTryTypes: true,
  //     },
  //     node: {
  //       extensions: ['.js', '.jsx', '.ts', '.tsx'],
  //     },
  //   },
  // },
  // settings: {
  //   'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  //   'import/parsers': {
  //     '@typescript-eslint/parser': ['.ts', '.tsx'],
  //   },
  //   'import/resolver': {
  //     typescript: {
  //       directory: './tsconfig.json',
  //     },
  //     node: {
  //       extensions: ['.js', '.jsx', '.ts', '.tsx'],
  //     },
  //   },
  // },
};

eslint.overrides = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    parser: '@typescript-eslint/parser',
    extends: [
      ...eslint.extends,
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
    ],
  },
];

module.exports = eslint;
