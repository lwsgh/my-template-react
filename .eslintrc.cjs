module.exports = {
  root: true,
  env: { browser: true, es2022: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    project: 'tsconfig.eslint.json',
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react-refresh', 'eslint-comments', 'promise', 'prettier'],
  rules: {
    //
    // eslint-plugin-prettier
    //
    'prettier/prettier': 'error',

    //
    // eslint-plugin-react-refresh
    //
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    //
    // eslint-plugin-import
    //
    // 因为 Typescript 本身提供了相应检查, 所以关闭下面 eslint-plugin-import 规则
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, optionalDependencies: false, peerDependencies: false },
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      rules: {
        // Allow CJS until ESM support improves
        '@typescript-eslint/no-var-requires': 'off',
        'unicorn/prefer-module': 'off',
      },
    },
  ],
};
