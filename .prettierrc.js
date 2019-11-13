module.exports = {
  overrides: [
    {
      files: ['.prettierrc', '.babelrc', '.eslintrc', '.stylelintrc'],
      options: {
        parser: 'json'
      }
    }
  ],
  singleQuote: true,
  printWidth: 100
};
