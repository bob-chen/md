var path = require('path');

module.exports = {
	//页面入口文件配置
	entry: {
		"index.entry": __dirname + '/js/index.entry.js',
	},

	//入口文件输出配置
	output: {
		filename: '[name].js',
		chunkFilename: "[name].chunk.js",
		publicPath: "/club/zb/act/midsummer_night/js/"
	},
	resolve: {
		alias: {
			lib: path.join(__dirname, '../../litelib')
		}
	},

	externals: {
		"vue": "Vue",
		"@tencent/apng-canvas": "APNG"
	},

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
						  localIdentName: "[local]___[hash:base64:5]"
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
		
			// {
			// 	test: /\.css$/,
			// 	loader: 'css-loader',
			// 	query: {
			// 	  modules: true,
			// 	  localIdentName: '[name]__[local]___[hash:base64:5]'
			// 	}
			// },
			// {
			// 	test: /\.scss$/,
			// 	use : [
			// 		'style-loader',
			// 		{
			// 			loader: 'typings-for-css-modules-loader',
			// 			options: {
			// 			  modules: true,
			// 			  namedExport: true
			// 			}
			// 		},					
			// 		{
			// 			loader: 'css-loader',
			// 			options: {
			// 				modules: true,
			// 				importLoaders: 2,
			// 				sourceMap: true,
			// 				localIdentName: "[local]___[hash:base64:5]"
			// 			}
			// 		},
			// 		{
			// 			loader: 'sass-loader',
			// 			options: {
			// 				outputStyle: 'expanded',
			// 				sourceMap: true
			// 			}
			// 		}
			// 	]
			// }			
			
			// {
			// 	test: /\.scss$/,
			// 	loader:'style-loader!typings-for-css-modules-loader?modules=true&namedExport=true!css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader?outputStyle=expanded&sourceMap!autoprefixer-loader?browsers=last 5 Chrome versions'
			// 	// loaders: ["style-loader", "css-loader", "sass-loader"]
			// }			
		],
	}	
};