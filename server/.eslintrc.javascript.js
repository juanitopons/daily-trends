module.exports = {
  parser: 'babel-eslint',
  extends: ['prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  settings: {
    'import/parsers': {
      'babel-eslint/parser': ['.js', '.jsx'],
    },
    'import/resolver': {
      javascript: {},
    },
  },
};
