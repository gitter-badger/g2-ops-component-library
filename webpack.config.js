const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { join, resolve } = path

const src = join(__dirname, 'src')
const dest = join(__dirname, '.')

module.exports = {
  devtool: 'inline-source-map',
  entry: [join(src, 'index.js')],
  output: {
    publicPath: '/',
    path: dest,
    filename: 'index.js',
    library: 'g2Components',
    libraryTarget: 'umd',
    umdNamedDefine: false,
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    // 'material-ui': 'material-ui',
    // 'office-ui-fabric-react': 'Fa,
  },
  resolve: {
    alias: {
      examples: join(src, 'examples'),
      components: join(src, 'components'),
      types: join(__dirname, 'types'),
    },
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

    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
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
