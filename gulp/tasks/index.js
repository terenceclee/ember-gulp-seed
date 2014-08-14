/**
 * Task to prepare index file
 */

/**
 * Get parent module
 * @type {object}
 */
var parent = require.main.app;

/**
 * Runs task to prepare index file
 */
function Index() {

	return parent.gulp.src(parent.CONFIG.index)
		.pipe(parent.preprocess({
			context: {
				ENVIRONMENT: parent.dist ? 'PRODUCTION' : 'DEVELOPMENT',
				TS: Date.now()
			}
		}))
		.pipe(parent.gulp.dest(parent.build ? parent.CONFIG.distRoot : parent.CONFIG.tmpRoot));
		
}

// Register Task
parent.gulp.task('Index', Index);
