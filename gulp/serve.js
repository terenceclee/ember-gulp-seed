/**
 * Serve Tasks
 */

/**
 * Get parent module
 * @type {object}
 */
var parent = require.main.app;

// Load tasks
require('./tasks/app');
require('./tasks/watch');

function ServeApp() {

    // Start live reload server
    parent.reloadServer = parent.tinylr();
    parent.reloadServer.listen(parent.CONFIG.reloadPort);

    // Start the development server
    parent.connect()
    .use(parent.livereload())
    .use(function (req, res, next){

        /**
         * Allowed extensions
         */
        var allowedExtensions = [
            '.html',
            '.js',
            '.css',
            '.png',
            '.jpg',
            '.jpeg',
            '.ico',
            '.eot',
            '.svg',
            '.ttf',
            '.woff'
        ],

        /**
         * Flag to see if an extension is not allowed
         * @type {boolean}
         */
        notAllowed = allowedExtensions.every(function (item){
            return req.url.indexOf(item) === -1;
        });

        if(notAllowed)
        {
            parent.send(req, '')
            .root(parent.CONFIG.tmpRoot + '/index.html')
            .pipe(res);
        }
        else
        {
            next();
        }
    })
    .use(parent.static(parent.CONFIG.tmpRoot))
    .listen(parent.CONFIG.serverPort);

    // Open the page
    parent.open('http://localhost:' + parent.CONFIG.serverPort);

    console.log('Server listening on http://localhost:' + parent.CONFIG.serverPort);

    // Watch for changes
    parent.gulp.start('Watch');

}


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


// Register task
parent.gulp.task('serve', function(){ parent.buildApp(ServeApp) });
parent.gulp.task('default', ['serve']);

