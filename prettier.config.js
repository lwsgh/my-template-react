export default {
  plugins: [
    'prettier-plugin-packagejson',
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-organize-attributes',
  ],

  //
  // Plugin: @trivago/prettier-plugin-sort-imports
  //
  importOrder: [
    '^vite',
    '^react',
    '<THIRD_PARTY_MODULES>',
    '^@components/(.*)$',
    '^@hooks/(.*)$',
    '^@pages/(.*)$',
    '^@services/(.*)$',
    '^@utils/(.*)$',
    '^[./]',
  ],
  // 启用或禁用按照importOrder对排序后的导入组进行换行分隔
  importOrderSeparation: true,
  // 启用或禁用导入声明中规范符号的排序
  importOrderSortSpecifiers: true,
  // 启用或禁用将命名空间限定符排序到导入组的顶部
  importOrderGroupNamespaceSpecifiers: true,
  // 用于在排序算法中启用对每个匹配组内的导入进行大小写不敏感的排序。
  importOrderCaseInsensitive: true,

  //
  // Plugin: prettier-plugin-organize-attributes
  //
  attributeGroups: ['$CODE_GUIDE'],
  attributeSort: 'ASC',
  attributeIgnoreCase: false,

  //
  // Perttier Rules
  //
  // 行尾需要有分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 末尾需要有逗号
  trailingComma: 'all',
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  bracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // vue 文件中的 script 和 style 内不用缩进
  vueIndentScriptAndStyle: false,
  // 格式化嵌入的内容
  embeddedLanguageFormatting: 'auto',
  // html, vue, jsx 中每个属性占一行
  singleAttributePerLine: false,
  // 一行最多 120 字符, 使用 editorconfig 中 max_line_length 替代
  // printWidth: 120,
  // 使用 2 个空格缩进, 使用 editorconfig 中 indent_size 替代
  // tabWidth: 2,
  // 不使用缩进符，而使用空格, 使用 editorconfig 中 indent_style 替代
  // useTabs: false,
  // 换行符使用 lf, 使用 editorconfig 中 end_of_line 替代
  // endOfLine: 'lf',
};
