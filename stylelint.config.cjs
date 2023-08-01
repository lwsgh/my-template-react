module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'layer', 'apply', 'variants', 'responsive', 'theme', 'screen'],
      },
    ],
  },
  overrides: [
    {
      // 针对html和vue文件进行处理
      files: ['*.html', '**/*.html', '**/*.vue'],
      // 在这里配置针对vue文件使用postcss-html作为语法解析器
      customSyntax: 'postcss-html',
    },
    {
      // 针对less件进行处理
      files: ['*.less', '**/*.less'],
      // 在这里配置针对less文件使用postcss-less作为语法解析器
      customSyntax: 'postcss-less',
    },
    {
      // 针对less件进行处理
      files: ['*.scss', '**/*.scss'],
      // 在这里配置针对less文件使用postcss-scss作为语法解析器
      customSyntax: 'postcss-scss',
    },
    {
      // 针对css-in-js进行处理
      files: ['**/*.{jsx,tsx}'],
      customSyntax: 'postcss-styled-syntax',
    },
  ],
};
