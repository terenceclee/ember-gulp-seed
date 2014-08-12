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
	vendor: './vendor',
	appHeadScripts: [
		'./vendor/json2/json2.js', 
        './vendor/modernizr/modernizr.js',
	],
	appScripts: [
        './vendor/angular/angular.js', 
        './vendor/angular-resource/angular-resource.js',
        './vendor/angular-route/angular-route.js',
        './vendor/angular-sanitize/angular-sanitize.js',
        './vendor/angular-touch/angular-touch.js',
        './vendor/angulartics/src/angulartics.js',
        './vendor/angulartics/src/angulartics-ga.js',
        './app/**/*.js',
        './dist/assets/templates.js'
	],
	serverPort: 9001,
	reloadPort: 35729,
	tasks: {
		build: ['JSHint', 'Clean', 'Templates', 'SASS', 'MainScripts', 'HeadScripts', 'Fonts', 'Index'],
		serve: ['JSHint', 'Clean', 'Templates', 'SASS', 'MainScripts', 'Vendor', 'Fonts', 'Index']
	}
};