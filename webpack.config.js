const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Helpers
const { webRoot, noop, execCommand } = require('./helpers');
// Consts
const EVENT = process.env.npm_lifecycle_event || '';
const PROD = EVENT.includes('release');

module.exports = {
    context: webRoot(),
    entry: {
        app: webRoot('./src/main.ts'),
        vendor: webRoot('./src/vendor.ts')
    },
    output: {
        filename: '[name].js',
        path: webRoot('./dist'),
		pathinfo: PROD ? false : true,
    },
    resolve: {
        extensions: ['.ts', '.js', '.scss'],
		descriptionFiles: ['package.json'],
		mainFields: ['browser', 'main'],
		modules: [
			webRoot('./src/app'),
			webRoot('node_modules'),
		],
        alias: {
            '@app': webRoot('./src/app'),
        },
		unsafeCache: PROD ? false : true,
    },
    module: {
        rules: [
            {
				test: /\.ts$/,
                include: webRoot('./src/app'),
				exclude: [/node_modules/, /spec\.ts$/],
				use: [
					{
						loader: 'awesome-typescript-loader',
						options: {
							useTranspileModule: true,
							configFileName: webRoot('./tsconfig.json'),
							useCache: PROD? false : true,
						}
					},
					{
						loader: 'angular2-template-loader'
					},
				]
			},
			{ 
				test: /\.scss$/, 
				include: webRoot('./src/app'),
				exclude: [/node_modules/],
				use: [
					'raw-loader',
					{
						loader: 'sass-loader',
					}
				]
			},
		]
    },
	plugins: [
		new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
	],
	devServer: {
		port: 3000,
		contentBase: webRoot('./src'),
		publicPath: '/dist',
	    historyApiFallback: {
    		disableDotRule: true,
    	},
	},
}