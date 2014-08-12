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

	return parent.gulp.src(parent.CONFIG.HeadScripts)
		.pipe(parent.concat('dependencies.min.js'))
		.pipe(parent.uglify())
		.pipe(parent.gulp.dest(parent.CONFIG.distRoot + '/assets'));
}

/**
 * Runs task to prepare main scripts
 */
function MainScripts() {

	return parent.gulp.src(parent.build ? parent.CONFIG.AppScripts : parent.CONFIG.scripts)
		.pipe(parent.concat('app' + (parent.build ? '.min' : '') + '.js'))
		.pipe(parent.gulpIf(parent.build, parent.uglify()))
		.pipe(parent.gulp.dest((parent.build ? parent.CONFIG.distRoot : parent.CONFIG.tmpRoot) + '/assets'));
		
}

// Register Tasks
parent.gulp.task('HeadScripts', HeadScripts);
parent.gulp.task('MainScripts', MainScripts);
