/**
 * Build Tasks
 */

/**
 * Get parent module
 * @type {object}
 */
var parent = require.main.app;

/**
 * Builds the app
 */
function BuildApp() {
}

parent.gulp.task('build', ['Clean', 'JSHint', 'Templates', 'SASS', 'MainScripts', 'Fonts', 'Index', 'Vendor','Lanceng']);
