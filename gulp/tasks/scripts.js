/**
 * Task to prepare main scripts
 */

/**
 * Get parent module
 * @type {object}
 */
var parent = require.main.app;

/**
 * Runs task to prepare head scripts
 */
function HeadScripts() {
	return parent.gulp.src(parent.CONFIG.appHeadScripts)
		.pipe(parent.concat('dependencies.min.js'))
		.pipe(parent.gulpIf(parent.dist, parent.uglify())
		.pipe(parent.gulp.dest((parent.dist ? parent.CONFIG.distRoot : parent.CONFIG.tmpRoot) + '/assets'));
}

/**
 * Runs task to prepare main scripts
 */
function MainScripts() {

	return parent.gulp.src( parent.CONFIG.appScripts )
		.pipe(parent.concat('app' + (parent.dist ? '.min' : '') + '.js'))
		.pipe(parent.gulpIf(parent.dist , parent.uglify()))
		.pipe(parent.gulp.dest((parent.dist ? parent.CONFIG.distRoot : parent.CONFIG.tmpRoot) + '/assets'));
		
}

// Register Tasks
parent.gulp.task('HeadScripts', HeadScripts);
parent.gulp.task('MainScripts', MainScripts);
