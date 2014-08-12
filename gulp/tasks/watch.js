/**
 * Watches for files and triggers only certain tasks
 */

/**
 * Get parent module
 * @type {object}
 */
var parent = require.main.app;

/**
 * Builds the App dependencies for serving purposes
 * @constructor
 */
function Watch() {

  // Watch Index
  parent.gulp.watch(parent.CONFIG.index, function(e) {

    // Store file path
    parent.eventPath = e.path;

    return parent.sequence('Index', 'Reload');

  });

  // Watch Styles
  parent.gulp.watch(parent.CONFIG.styles, function() {

    return parent.sequence('SASS', 'Reload');

  });

  // Watch Scripts
  parent.gulp.watch(parent.CONFIG.scripts, function() {

    return parent.sequence('JSHint', 'Scripts', 'Reload');

  });

  // Watch Templates
  parent.gulp.watch(parent.CONFIG.templates, function() {

    return parent.sequence('Templates', 'Reload');

  });

}

// Register Task
parent.gulp.task('Watch', Watch);