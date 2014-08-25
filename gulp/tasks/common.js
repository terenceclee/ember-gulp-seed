/**
 * Common tasks
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
	return parent.gulp.src(parent.CONFIG.distRoot, parent.CONFIG.tmpRoot)
		.pipe(parent.clean());
		
}

/**
 * Copies vendor scripts for the dev server
 */
function Vendor() {
        return parent.gulp.src(parent.CONFIG.vendor)
                .pipe(parent.gulp.dest(parent.CONFIG.tmpRoot) );
}

/**
 * Runs JSHint on Scripts
 */
function JSHint() {
        return parent.gulp.src(parent.CONFIG.scripts)
                .pipe(parent.jshint())
                .pipe(parent.jshint.reporter(parent.stylish));
}


// Register Task
parent.gulp.task('Clean', Clean);
parent.gulp.task('JSHint', JSHint);
parent.gulp.task('Vendor', Vendor);
