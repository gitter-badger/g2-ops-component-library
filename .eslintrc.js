const path = require('path')
const customImportResolver = path.resolve('./flow.resolver')

module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  plugins: ['react', 'flowtype'],
  extends: 'eslint-config-airbnb-easy',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
        paths: ['node_modules', path.join(__dirname, 'src')],
      },
      [customImportResolver]: {
        moduleNameMapper: {
          '^types/(.*)': './types/$1',
        },
      },
    },
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },
  rules: {
    'array-bracket-spacing': [1, 'always'],
    eqeqeq: [2, 'smart'],
    'jsx-quotes': [1, 'prefer-double'],
    'no-console': 0,
    'no-unused-vars': 0,
    'object-curly-spacing': [1, 'always'],
    quotes: [1, 'single', 'avoid-escape'],
    'react/jsx-space-before-closing': [1, 'never'],
    'react/no-did-mount-set-state': 0,
    'react/prop-types': 0,
    semi: [1, 'never'],
    'space-before-blocks': [1, 'always'],
  },
  globals: {
    ReactComponent: false,
    ReactElement: false,
    SyntheticEvent: false,
    SyntheticClipboardEvent: false,
    SyntheticCompositionEvent: false,
    SyntheticInputEvent: false,
    SyntheticUIEvent: false,
    SyntheticFocusEvent: false,
    SyntheticKeyboardEvent: false,
    SyntheticMouseEvent: false,
    SyntheticDragEvent: false,
    SyntheticWheelEvent: false,
    SyntheticTouchEvent: false,
    Intl: false,
  },
}
