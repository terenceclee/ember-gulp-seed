/**
 * Build Tasks
 */
require('./tasks/common');
require('./tasks/app');

/**
 * Get parent module
 * @type {object}
 */
var parent = require.main.app;

/**
 * Builds the app
 */
function BuildApp(callback) {
    return parent.sequence('Clean', ['JSHint', 'App.Styles', 'App.Scripts', 'App.Assets'], callback);
}

parent.buildApp = BuildApp;

/**
 * Dist the app
 */
function DistApp(){
        parent.dist = true;
        return parent.sequence('build'); //add dist-only tasks as extra arguments (i.e. "('build','dist-task1', 'dist-task2'...etc)" )to the "sequence" function.
}

//Register tasks
parent.gulp.task('dist', DistApp);
parent.gulp.task('build', BuildApp);

