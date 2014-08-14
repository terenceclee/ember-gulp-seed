/**
 * Task to clean app for serve or release
 */

/**
 * Get parent module
 * @type {object}
 */
var parent = require.main.app;

/**
 * Runs task to clean directories
 */
function Clean() {

	return parent.gulp.src(parent.dist ? parent.CONFIG.distRoot : parent.CONFIG.tmpRoot)
		.pipe(parent.clean());
		
}

// Register Task
parent.gulp.task('Clean', Clean);
