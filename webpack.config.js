const BabiliPlugin = require('babili-webpack-plugin')
const path = require('path')
const config = require('./config.json')

module.exports = {
    entry: "./src/js-renderer/controller.js",
	output: {
		path: __dirname,
		filename: './src/js-renderer/renderer.min.js',
		libraryTarget: 'umd'
    },
    devtool: config.debug ? "source-map" : false,
    target: 'electron-renderer',
    plugins: [
        new BabiliPlugin()
    ]
}