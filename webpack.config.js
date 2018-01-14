const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { join, resolve } = path

const root = resolve(__dirname)
const src = join(root, 'src')
const dest = join(root, '.')

module.exports = {
  devtool: 'source-map',
  entry: [ join(src, 'index.js') ],
  output: {
    publicPath: '/',
    path: dest,
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  externals: {
    react: { commonjs: 'react', commonjs2: 'react' },
    'react-dom': { commonjs: 'react-dom', commonjs2: 'react-dom' },
    'material-ui': { commonjs: 'material-ui', commonjs2: 'material-ui' },
    'office-ui-fabric-react': { commonjs: 'office-ui-fabric-react', commonjs2: 'office-ui-fabric-react' }
  },
  resolve: {
    alias: {
      examples: join(src, 'examples'),
      components: join(src, 'components')
    },
    extensions: [ '.jsx', '.js', '.css' ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'BABEL_ENV': JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
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
  }
}
