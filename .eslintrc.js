const path = require('path')

module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
  },
  plugins: ["react"],
  extends: "eslint-config-airbnb-easy",
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
        paths: ['node_modules', path.join(__dirname, 'src')],
      },
    },
  },
  rules: {
    "array-bracket-spacing": [1, "always"],
    "comma-dangle": [1, "never"],
    eqeqeq: [2, "smart"],
    "jsx-quotes": [1, "prefer-double"],
    "no-console": 0,
    "no-unused-vars": 0,
    "object-curly-spacing": [1, "always"],
    quotes: [1, "single", "avoid-escape"],
    "react/jsx-space-before-closing": [1, "never"],
    "react/no-did-mount-set-state": 0,
    "react/prop-types": 0,
    semi: [1, "never"],
    "space-before-blocks": [1, "always"],
  },
}
