/**
 * Task to reload page on a given change
 */

/**
 * Get parent module
 * @type {object}
 */
var parent = require.main.app;

function Reload() {

  setTimeout(function() {

    parent.reloadServer.changed({
      body: {
        files: parent.eventPath
      }
    });

  }, 500);

}

// Register task
parent.gulp.task('Reload', Reload);