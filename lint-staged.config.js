export default {
  'src/**/*.{js,ts,jsx,tsx}': ['eslint --fix --cache --format=pretty', 'prettier --write --ignore-unknown'],
  'src/**/*.{less,postcss,css,scss}': [
    'stylelint --fix --cache --allow-empty-input',
    'prettier --write --ignore-unknown',
  ],
  'src/**/*.{md,json}': ['prettier --write --ignore-unknown'],
};
