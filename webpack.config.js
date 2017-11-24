const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "index.html",
  inject: "body",
})
module.exports = {
  devtool: 'source-map',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".jsx", ".js", ".css"],
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.(css|less)/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              importLoaders: true,
              sourceMap: true,
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:5]",
            },
          },
        ],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
          },
        ],
      },
    ],
  },
  plugins: [HtmlWebpackPluginConfig],
}
