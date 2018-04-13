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
    'no-unused-vars': 0,
    'no-console': 0,
    'react/no-did-mount-set-state': 0,
    'react/prop-types': 0,
    eqeqeq: [2, 'smart'],
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
