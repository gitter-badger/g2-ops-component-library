const path = require('path')
const webpack = require('webpack')
const babelrc = require('./packages/core/.babelrc.js')
const HtmlWebpackPlugin = require('mini-html-webpack-plugin')

const resolve = _path => path.resolve(__dirname, _path)

module.exports = {
	devtool: 'source-map',
	mode: 'development',
	entry: resolve('packages/core/src/index.js'),

	output: {
		publicPath: '/',
		path: resolve('packages/core/dist'),
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
	],

	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							plugins: babelrc.plugins,
							presets: babelrc.presets,
						},
					},
				],
				exclude: /node_modules/,
			},
			{
				test: /\.(css|scss)$/,
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
