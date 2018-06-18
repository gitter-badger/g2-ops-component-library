module.exports = {
  env: {
    production: {
      plugins: [
        'babel-plugin-closure-elimination',
        'babel-plugin-transform-react-constant-elements',
        'babel-plugin-add-react-displayname',
      ],
    },
  },

  presets: ['@babel/preset-env', '@babel/preset-flow', '@babel/preset-react'],

  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-pipeline-operator',
    '@babel/plugin-proposal-function-bind',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-do-expressions',
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-catch-binding',
    '@babel/plugin-proposal-unicode-property-regex',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-logical-assignment-operators',
    'babel-plugin-jsx-control-statements',
    '@babel/plugin-proposal-export-default-from',
    [
      'babel-plugin-transform-react-remove-prop-types',
      {
        removeImport: true,
      },
    ],
    [
      'babel-plugin-module-resolver',
      {
        root: ['./'],
        cwd: 'babelrc',
        alias: {
          '^examples/(.+)': './examples\\1',
          '^components/(.+)': './src/components/\\1',
          '^utilities/(.+)': './src/utilities/\\1',
          '^types/(.+)': './src/types/\\1',
        },
      },
    ],
    [
      'babel-plugin-react-css-modules',
      {
        generateScopedName: '__[name]-[local]',
        handleMissingStyleName: 'warn',
        filetypes: {
          '.pcss': {
            syntax: 'postcss-scss',
          },
        },
        context: '.${PWD}/packages/core/src',
        exclude: 'node_modules',
      },
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: false,
        polyfill: false,
        regenerator: true,
        moduleName: 'babel-runtime',
      },
    ],
  ],
}
