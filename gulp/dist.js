/**
 * Build Tasks
 */

/**
 * Get parent module
 * @type {object}
 */
var parent = require.main.app;

/**
 * Dist the app
 */
function DistApp(){
	parent.dist = true;
	return parent.sequence(['build', 'HeadScripts']);
}

parent.gulp.task('dist', DistApp);
