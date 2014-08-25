/**
 * Configuration Object
 */

module.exports = {
	//server and folder config
	serverPort: 9001,
	reloadPort: 35729,
	distRoot: './dist',
	tmpRoot: './tmp',
	//app config
	appRoot: './src/app',
	sass: './src/app/*.sass',
	less: './src/app/*.less',
	index: './src/app/index.html',
	vendor: './vendor/**',
	scripts: ['./src/app/**/*.js']
};
