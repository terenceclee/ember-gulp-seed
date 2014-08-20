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
function BuildApp(callback) {
    return parent.sequence('Clean', ['JSHint', 'Templates', 'SASS', 'LESS', 'MainScripts', 'Fonts', 'Index', 'Vendor'], callback);
}

parent.buildApp = BuildApp;

parent.gulp.task('build', BuildApp);
