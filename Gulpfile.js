/**
 * Gulpfile
 */

// Load modules
module.gulp       = require('gulp');
module.sass       = require('gulp-sass');
module.less       = require('gulp-less');
module.concat     = require('gulp-concat');
module.uglify     = require('gulp-uglify');
module.clean      = require('gulp-clean');
module.preprocess = require('gulp-preprocess');
module.cssmin     = require('gulp-minify-css');
module.minify     = require('gulp-minify-html');
module.html2js    = require('gulp-html2js');
module.uncss      = require('gulp-uncss');
module.gulpIf     = require('gulp-if');
module.newer      = require('gulp-newer');
module.jshint     = require('gulp-jshint');
module.connect    = require('connect');
module.send       = require('send');
module.open       = require('open');
module.tinylr     = require('tiny-lr');
module.livereload = require('connect-livereload');
module.sequence   = require('run-sequence');
module.stylish    = require('jshint-stylish');
module.static     = require('serve-static');

// Load configuration
module.CONFIG = require('./gulp/config');

// Load module into require so it is accessible anywhere
require.main.app = module;

module.dist = false;

// Load tasks
require('./gulp/test');
require('./gulp/build');
require('./gulp/serve');
require('./gulp/dist');

// Export gulp for browser access
module.exports = module.gulp;
