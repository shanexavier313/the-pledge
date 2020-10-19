module.exports = {
  parser: 'babel-eslint',
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['always', 'always-multiline'],
    'global-require': 'off',
    semi: 'false',
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@material-ui/*/*/*', '!@material-ui/core/test-utils/*'],
      },
    ],
  },
}
