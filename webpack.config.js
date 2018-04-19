const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  devtool: 'source-map',
  entry: resolve(__dirname, 'packages/core/index.js'),

  output: {
    publicPath: '/',
    path: resolve(__dirname, 'packages/core/dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs',
    umdNamedDefine: false,
  },

  externals: [
    // /^office-ui-fabric-react\/lib\/.+/,
    /^react$/,
    /react-dom/,
    // /^moment$/,
    // /^moment-timezone$/,
    // /^material-ui\/.+/,
    // /^@uifabric\/.+/,
  ],

  resolve: {
    extensions: ['.js', '.css'],
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false,
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        BABEL_ENV: JSON.stringify('production'),
      },
    }),

    // new BundleAnalyzerPlugin(),

    // new HtmlWebpackPlugin({
    //   template: './src/index.html',
    //   filename: 'index.html',
    //   inject: 'body',
    // }),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
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
