/**
 * Task to copy vendor files for serving
 */

/**
 * Get parent module
 * @type {object}
 */
var parent = require.main.app;

/**
 * Copies vendor scripts for the server
 */
function Vendor() {

	return parent.gulp.src(parent.CONFIG.vendor)
		.pipe(parent.gulp.dest(parent.CONFIG.tmpRoot) );
		
}

function Lanceng(){
	return parent.gulp.src(parent.CONFIG.lanceng, { "base" : "." })
		.pipe(parent.gulp.dest(parent.CONFIG.tmpRoot) );
}

// Register Task
parent.gulp.task('Vendor', Vendor);
parent.gulp.task('Lanceng', Lanceng);
