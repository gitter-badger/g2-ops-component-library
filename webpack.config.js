const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { join, resolve } = path
const root = resolve(__dirname)
const src = join(root, 'src')
const dest = join(root, 'public')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    publicPath: '/',
    path: dest,
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      examples: join(src, 'examples'),
      components: join(src, 'components'),
      types: join(root, 'types')
    },
    extensions: [ '.jsx', '.js', '.css' ]
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.(css|less)/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: true,
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [ HtmlWebpackPluginConfig ]
}
