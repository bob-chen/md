var path = require('path');
var webpack = require('webpack');

module.exports = {
	//页面入口文件配置
	entry: {
		"index.entry": __dirname + '/src/js/index.entry.js',
	},

	//入口文件输出配置
	output: {
		filename: '[name].js',
		chunkFilename: "[name].chunk.js",
	},
	// resolve: {
	// 	alias: {
	// 		lib: path.join(__dirname, '../../litelib')
	// 	}
	// },

	externals: {
		"vue": "Vue",
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
		  compress: {warnings: false},
		  output: {comments: false},
		  sourceMap: true
		})
	],
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: 'text-loader'
			},
			{
				test: /\.scss$/,
				use: [
					{ 
						loader: 'style-loader',
						options: {
							insertAt: 'top'
						}
					},
					{
						loader: 'typings-for-css-modules-loader',
						options: {
						  modules: true,
						  namedExport: true,
						  camelCase: true,
						  minimize: true,
						  localIdentName: "[local]_[hash:base64:5]"
						}
					},
					{
						loader: 'sass-loader',
						options: {
							outputStyle: 'expanded',
							sourceMap: true
						}
					}					
				]
			},			
		],
	}	
};