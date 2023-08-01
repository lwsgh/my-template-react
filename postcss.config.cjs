module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-preset-env': {
      // stage-0 非官方草案
      // stage-1 编辑草案或早期工作草案
      // stage-2 工作草案
      // stage-3 候选版本
      // stage-4 推荐标准
      stage: 3,
      autoprefixer: {},
      features: {
        'custom-media-queries': true,
        'custom-properties': false,
        'custom-selectors': { preserve: true },
        'nesting-rules': false,
      },
    },
    'css-declaration-sorter': {
      order: 'smacss',
    },
    'postcss-sort-media-queries': {
      sort: 'mobile-first',
    },
  },
};
