/**
 * Task to run JSHint on app code
 */

/**
 * Get parent module
 * @type {object}
 */
var parent = require.main.app;

/**
 * Runs JSHint on Scripts
 */
function JSHint() {

	return parent.gulp.src(parent.CONFIG.scripts)
		.pipe(parent.jshint())
		.pipe(parent.jshint.reporter(parent.stylish));
		
}

// Register Task
parent.gulp.task('JSHint', JSHint);