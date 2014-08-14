/**
 * Task to compile SASS
 */

/**
 * Get parent module
 * @type {object}
 */
var parent = require.main.app;

/**
 * Runs task to prepare stylesheet
 */
function SASS() {

	return parent.gulp.src(parent.CONFIG.sass)
		.pipe(parent.sass())
		.pipe(parent.gulp.dest((parent.dist ? parent.CONFIG.distRoot : parent.CONFIG.tmpRoot) + '/assets'));
		
}

// Register Task
parent.gulp.task('SASS', SASS);
