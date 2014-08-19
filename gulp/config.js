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
	appRoot: './app',
	styles: './app/**/*.scss',
	sass: './app/sass/main.sass',
	less: './app/**/*.less',
	images: './app/images/**/*.{jpg,jpeg,png,gif,ico}',
	fonts: './app/fonts/**/*.*',
	templates: './app/**/*.tpl.html',
	index: './app/index.html',
	vendor: './vendor/**',
	lanceng: './app/third/lanceng/**',
	scripts: ['./app/**/*.js'],
	appHeadScripts: [
		'./vendor/**/*.js', 
	],
	appScripts: [
	        './app/**',
	]
};
