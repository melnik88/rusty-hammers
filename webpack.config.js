var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./entry",
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loaders: ['style', 'css'], include: __dirname + '/dist' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Rusty Hammers'
        })
    ],
    watch: true
};