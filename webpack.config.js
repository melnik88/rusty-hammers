var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: './app',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: 'style!css' },
			{
				test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel', query: { presets: ['es2015', 'stage-0', 'react'] }
			}
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