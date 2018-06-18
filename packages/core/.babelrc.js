module.exports = {
    "env": {
      "production": {
        "plugins": [
          "babel-plugin-closure-elimination",
          "babel-plugin-transform-react-constant-elements",
          "babel-plugin-add-react-displayname"
        ]
      }
    },
  
    "presets": [
      ["@babel/preset-stage-0", {
        "decoratorsLegacy": true
      }],
      "@babel/preset-env",
      "@babel/preset-flow",
      "@babel/preset-react"
    ],
  
    "plugins": [
      [
        "@babel/plugin-proposal-class-properties",
        {
          "loose": true
        }
      ],
      "babel-plugin-jsx-control-statements",
      "@babel/plugin-proposal-export-default-from",
      [
        "babel-plugin-transform-react-remove-prop-types",
        {
          "removeImport": true
        }
      ],
      [
        "babel-plugin-module-resolver",
        {
          "root": ["./"],
          "cwd": "babelrc",
          "alias": {
            "^examples/(.+)": "./examples\\1",
            "^components/(.+)": "./src/components/\\1",
            "^utilities/(.+)": "./src/utilities/\\1",
            "^types/(.+)": "./src/types/\\1"
          }
        }
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
          context: '.${PWD}/src',
          exclude: 'node_modules'
        }
			],
			[
				'@babel/plugin-transform-runtime',
				{
					helpers: false,
					polyfill: false,
					regenerator: true,
					moduleName: 'babel-runtime'
				}
			],
    ]
  }
  