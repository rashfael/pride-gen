const path = require('path')

module.exports = {
	devServer: {
		host: 'localhost',
		port: 8880
	},
	transpileDependencies: ['buntpapier'],
	configureWebpack: {
		resolve: {
			symlinks: false, // don't flatten symlinks (for npm link)
			modules: [path.resolve('src'), path.resolve('src/styles'), 'node_modules']
		},
		module: {
			rules: [
				{
					test: /\.pug/,
					loader: 'pug-plain-loader'
				}
			]
		},
	},
	css: {
		loaderOptions: {
			stylus: {
				use: [require('buntpapier/stylus')()]
			}
		}
	},
	lintOnSave: true
}
