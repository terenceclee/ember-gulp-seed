/**
 * Serve Tasks
 */

/**
 * Get parent module
 * @type {object}
 */
var parent = require.main.app;

// Load tasks
require('./tasks/prepare');
require('./tasks/jshint');
require('./tasks/clean');
require('./tasks/vendor');
require('./tasks/fonts');
require('./tasks/templates');
require('./tasks/sass');
require('./tasks/scripts');
require('./tasks/index');
require('./tasks/reload');
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

// Register task
parent.gulp.task('serve', ['PrepareApp'], ServeApp);
parent.gulp.task('default', ['serve']);

