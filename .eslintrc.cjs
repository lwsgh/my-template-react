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
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:promise/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react-refresh', 'promise'],
  rules: {
    //
    // eslint-plugin-react-refresh
    //
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    //
    // @typescript-eslint/eslint-plugin
    //
    // 禁止使用 non-null 断言（感叹号）
    '@typescript-eslint/no-non-null-assertion': 'off',
    // 禁止将变量或属性的类型设置为 any
    '@typescript-eslint/no-unsafe-assignment': 'off',

    //
    // eslint-plugin-react
    //
    // React17开始不再需要
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

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

    'no-restricted-syntax': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
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
  ignorePatterns: [
    'build',
    'config',
    'coverage',
    'dist',
    'public',
    'node_modules',
    '.*lintrc.js',
    '.*lintrc.cjs',
    '*.config.js',
    '*.config.cjs',
  ],
};
