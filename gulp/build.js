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
    return parent.gulp.start('buildHelper');
}

parent.gulp.task('build', ['Clean'], BuildApp);
parent.gulp.task('buildHelper', ['JSHint', 'Templates', 'SASS', 'LESS', 'MainScripts', 'Fonts', 'Index', 'Vendor'] );
