const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path')
const webpack = require('webpack')


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

    new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss)$/,
        use: [
            MiniCssExtractPlugin.loader,
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
