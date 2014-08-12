/**
 * Task to prepare angular templates
 */

/**
 * Get parent module
 * @type {object}
 */
var parent = require.main.app;

/**
 * Runs task to prepare angular templates
 */
function Templates() {

	return parent.gulp.src(parent.CONFIG.templates)
		.pipe(parent.html2js({
			outputModuleName: 'app.templates'
		}))
		.pipe(parent.concat('templates.js'))
		.pipe(parent.gulp.dest((parent.build ? parent.CONFIG.distRoot : parent.CONFIG.tmpRoot) + '/assets'));
		
}

// Register Task
parent.gulp.task('Templates', Templates);