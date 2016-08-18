var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: "./entry",
	output: {
		path: __dirname + '/dist',
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: 'style!css'}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Rusty Hammers',
			template: 'index.html'
		})
	],
	watch: true
};