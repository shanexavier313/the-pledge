module.exports = {
  parser: 'babel-eslint',
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    'global-require': 'off',
    semi: 'error',
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    quotes: ['error', 'single', { avoidEscape: true }],
  },
}
