module.exports = {
  'src/**/*.{js,ts,jsx,tsx}': ['eslint --cache --fix --format=pretty', 'prettier --write --ignore-unknown'],
  'src/**/*.{css,less,scss,html}': ['stylelint --cache --fix --allow-empty-input', 'prettier --write --ignore-unknown'],
  'src/**/*.{md,json}': ['prettier --write --ignore-unknown'],
};
