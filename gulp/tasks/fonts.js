/**
 * Task to copy fonts for serving or release
 */

/**
 * Get parent module
 * @type {object}
 */
var parent = require.main.app;

/**
 * Runs task to copy fonts
 */
function Fonts() {

	return parent.gulp.src(parent.CONFIG.fonts)
		.pipe(parent.gulp.dest((parent.build ? parent.CONFIG.distRoot : parent.CONFIG.tmpRoot) + '/assets/fonts'))
		
}

// Register Task
parent.gulp.task('Fonts', Fonts);