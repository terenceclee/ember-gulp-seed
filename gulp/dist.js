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
}

parent.gulp.task('dist', ['build','HeadScripts'], DistApp);
