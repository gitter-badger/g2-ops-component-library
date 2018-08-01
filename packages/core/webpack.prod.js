const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const pkg = require('./package.json')

const resolve = (_path) => {
    return path.resolve(__dirname, _path)
}

module.exports = {
  devtool: 'source-map',
  entry: resolve('src/index.js'),

  output: {
    publicPath: '/',
    path: resolve('dist/'),
    filename: 'index.js',
    libraryTarget: 'commonjs',
    umdNamedDefine: false,
  },

  externals: [
    /^react$/,
    /react-dom/,
  ],

  resolve: {
    extensions: ['.js', '.css'],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false,
      __VERSION__: pkg.version
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        BABEL_ENV: JSON.stringify('production'),
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
			{
        test: /\.(pcss)$/,
        use: [
          {
            loader: 'style-loader'
          },
					{
						loader: 'css-loader',
						options: {
							modules: true,
							importLoaders: 1,
							localIdentName: '__[name]-[local]'
						}
					},
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
					{
						loader: 'css-loader'
					},
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
}
