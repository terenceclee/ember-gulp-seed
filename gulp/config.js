/**
 * Configuration Object
 */

module.exports = {
	appRoot: './app',
	distRoot: './dist',
	tmpRoot: './tmp',
	templates: './app/**/*.tpl.html',
	index: './app/index.html',
	images: './app/images/**/*.{jpg,jpeg,png,gif,ico}',
	scripts: ['./app/**/*.js'],
	styles: './app/**/*.scss',
	sass: './app/sass/main.sass',
	fonts: './app/fonts/**/*.*',
	vendor: './vendor/**',
	appHeadScripts: [
		'./vendor/**/*.js', 
	],
	appScripts: [
        	'./vendor/angular*/*.js', 
	        './app/**/*.js',
       		'./dist/assets/templates.js'
	],
	serverPort: 9001,
	reloadPort: 35729,
	tasks: {
		dist:  ['Clean', 'JSHint', 'Templates', 'SASS', 'MainScripts', 'HeadScripts', 'Fonts', 'Index'],
		serve: ['Clean', 'JSHint', 'Templates', 'SASS', 'MainScripts', 'HeadScripts', 'Fonts', 'Index', 'Vendor']
	}
};
