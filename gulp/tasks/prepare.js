/**
 * Task to prepare the app for serving or release
 */

/**
 * Get parent module
 * @type {object}
 */
var parent = require.main.app;

/**
 * Runs tasks to prepare the app
 */
function PrepareApp() {

	var tasks = parent.dist ? parent.CONFIG.tasks.dist : parent.CONFIG.tasks.serve;

	return parent.sequence(tasks);
}

// Register Task
parent.gulp.task('PrepareApp', PrepareApp);
