module.exports = {
  ignorePatterns: ['node_modules/**/*.*'],
  extends: [], //base eslint extends
  plugins: [], //base plugins
  env: {
    es6: true,
    node: true,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['.eslintrc.typescript']
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      extends: ['.eslintrc.javascript']
    },
  ],
};
