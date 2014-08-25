/**
 * Gulpfile
 */
// Load modules
module.gulp       = require('gulp');
module.clean      = require('gulp-rimraf');
module.gulpIf     = require('gulp-if');
module.newer      = require('gulp-newer');

module.preprocess = require('gulp-preprocess');
module.concat     = require('gulp-concat');
module.sass       = require('gulp-sass');
module.less       = require('gulp-less');
module.cssmin     = require('gulp-minify-css');
module.uncss      = require('gulp-uncss');
module.uglify     = require('gulp-uglify');
module.minify     = require('gulp-minify-html');
module.html2js    = require('gulp-html2js');
module.jshint     = require('gulp-jshint');

module.connect    = require('connect');
module.send       = require('send');
module.open       = require('open');
module.tinylr     = require('tiny-lr');
module.livereload = require('connect-livereload');
module.stylish    = require('jshint-stylish');
module.sequence   = require('run-sequence');
module.static     = require('serve-static');


// Load configuration
module.CONFIG = require('./gulp/config');

// Load module into require so it is accessible anywhere
require.main.app = module;

//Distribution flag (by default, false, if true, tasks will run in production mode)
module.dist = false;

// Load tasks
require('./gulp/test');
require('./gulp/build');
require('./gulp/serve');

// Export gulp for browser access
module.exports = module.gulp;
