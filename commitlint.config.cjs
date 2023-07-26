/** @type {import('cz-git').UserConfig} */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/*
monorepo 项目时使用
const packages = fs.readdirSync(path.resolve(__dirname, 'packages'));
*/

const packages = fs
  .readdirSync(path.resolve(__dirname, 'src'), { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name.replace(/s$/, ''));

const gitStatus = execSync('git status --porcelain || true').toString().trim().split('\n');

const scopeComplete = gitStatus
  // eslint-disable-next-line no-bitwise
  .find((r) => ~r.indexOf('M  src'))
  ?.replace(/(\/)/g, '%%')
  ?.match(/src%%((\w|-)*)/)?.[1]
  ?.replace(/s$/, '');

const subjectComplete = gitStatus
  // eslint-disable-next-line no-bitwise
  .find((r) => ~r.indexOf('M  src'))
  ?.replace(/\//g, '%%')
  ?.match(/src%%((\w|-)*)/)?.[1];

// @tip: git branch name = feature/issue_33   =>    auto get defaultIssues = #33
const issue = execSync('git rev-parse --abbrev-ref HEAD').toString().trim().split('_')[1];

module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  // 可选，自定义rules，覆盖@commitlint/config-conventional的配置
  rules: {},
  prompt: {
    /**
     * ------------------------------------------------------------
     * 显示相关配置
     * ------------------------------------------------------------
     */

    /* 自定义命令行提问信息 */
    messages: {
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: '选择关联issue前缀（可选）:',
      customFooterPrefix: '输入自定义issue前缀 :',
      footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
      generatingByAI: 'AI正在生成您的提交主题...',
      generatedSelectByAI: '选择适合的AI生成的主题:',
      confirmCommit: '是否提交或修改commit ?',
    },
    /* 自定义选择类型提示 */
    types: [
      { value: 'feat', name: 'feat:     ✨ 新增功能 | A new feature', emoji: ':sparkles:' },
      { value: 'fix', name: 'fix:      🐛 修复缺陷 | A bug fix', emoji: ':bug:' },
      { value: 'docs', name: 'docs:     📝 文档更新 | Documentation only changes', emoji: ':memo:' },
      {
        value: 'style',
        name: 'style:    💄 代码格式 | Changes that do not affect the meaning of the code',
        emoji: ':lipstick:',
      },
      {
        value: 'refactor',
        name: 'refactor: ♻️ 代码重构 | A code change that neither fixes a bug nor adds a feature',
        emoji: ':recycle:',
      },
      { value: 'perf', name: 'perf:    ⚡️ 性能提升 | A code change that improves performance', emoji: ':zap:' },
      {
        value: 'test',
        name: 'test:     ✅ 测试相关 | Adding missing tests or correcting existing tests',
        emoji: ':white_check_mark:',
      },
      {
        value: 'build',
        name: 'build:   📦️ 构建相关 | Changes that affect the build system or external dependencies',
        emoji: ':package:',
      },
      {
        value: 'ci',
        name: 'ci:       🎡 持续集成 | Changes to our CI configuration files and scripts',
        emoji: ':ferris_wheel:',
      },
      { value: 'revert', name: 'revert:  ⏪️ 回退代码 | Revert to a commit', emoji: ':rewind:' },
      {
        value: 'chore',
        name: 'chore:    🔨 其他修改 | Other changes that do not modify src or test files',
        emoji: ':hammer:',
      },
    ],
    /* 在默认 types 的基础上，添加额外的 types */
    typesAppend: [
      { value: 'workflow', name: 'workflow: 流程改进 | workflow improvements' },
      { value: '*!', name: '*!:       破坏性更改 | BREAKING CHANGES' },
    ],
    /* 是否开启 commit message 带有 Emoji 字符 */
    useEmoji: true,
    /* 如果 defaultScope 与 scopes 选择范围列表项中的 value 相匹配就会进行星标置顶操作。 */
    customScopesAlign: !scopeComplete ? 'top-bottom' : 'bottom',
    defaultScope: scopeComplete,
    /* 在简短描述中是否使用显示默认值 */
    defaultSubject: subjectComplete && `[${subjectComplete}] `,
    /* 在详细描述中是否使用显示默认值 */
    defaultBody: '',
    /* 在 输入ISSUE 中是否使用显示默认值 */
    customIssuePrefixAlign: !issue ? 'top' : 'bottom',
    defaultIssues: !issue ? '' : `#${issue}`,

    /**
     * ------------------------------------------------------------
     * 控制相关
     * ------------------------------------------------------------
     */
    /**
      定义常用的 commit message 别名
      @use `pnpm commit :f
    */
    alias: {
      f: 'docs: fix typos',
      u: 'docs: update README',
      s: 'style: update code format',
      b: 'build: bump dependencies',
      c: 'chore: update config',
    },
    /* 自定义选择 模块范围 命令行显示信息 */
    scopes: [
      { value: 'biz', name: 'biz:       系统业务' },
      { value: 'test', name: 'test:      测试相关' },
      ...packages,
    ],
    enableMultipleScopes: true,
    scopeEnumSeparator: ',',
    /* 是否在选择 模块范围 显示自定义选项(custom) */
    allowCustomScopes: true,
    /* 是否在选择 模块范围 显示为空选项(empty) */
    allowEmptyScopes: true,
    /* 允许出现 重大变更(BREAKING CHANGES)的特定 type */
    allowBreakingChanges: ['feat', 'fix'],
    /* 添加额外的问题重大变更(BREAKING CHANGES)提问，询问是否需要添加 "!" 标识于头部 */
    markBreakingChangeMode: false,
    /* 是否自动将简短描述(subject)第一个字符进行大写处理 */
    upperCaseSubject: false,
    /* 详细描述(body)和重大变更(BREAKING CHANGES)中根据字符超过该数值自动换行 */
    breaklineNumber: 100,
    /* 详细描述(body)和重大变更(BREAKING CHANGES)中换行字符 */
    breaklineChar: '|',
    /* 自定义选择issue前缀 */
    issuePrefixes: [
      // 如果使用 gitee 作为开发管理
      { value: 'link', name: 'link:     链接 ISSUES 进行中' },
      { value: 'closed', name: 'closed:   标记 ISSUES 已完成' },
    ],
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    /* 定义commit message中的 header 长度, 给予在命令行中的校验信息 */
    maxHeaderLength: Infinity,
    /* 定义commit message中的 subject 长度, 给予在命令行中的校验信息 */
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    skipQuestions: [],
    useAI: false,
  },
};
