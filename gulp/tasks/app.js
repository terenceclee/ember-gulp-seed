require('./common');
/**
 * Get parent module
 * @type {object}
 */
var parent = require.main.app;

/**
 * Runs task to prepare index file
 */
function Index(){
	return parent.gulp.src(parent.CONFIG.index)
		.pipe(parent.preprocess({
			context: {
				ENVIRONMENT: parent.dist ? 'PRODUCTION' : 'DEVELOPMENT',
				TS: Date.now()
			}
		}))
		.pipe(parent.gulp.dest(parent.build ? parent.CONFIG.distRoot : parent.CONFIG.tmpRoot));
}

/**
 * Runs task to prepare SASS stylesheet
 */
function SASS(){
        return parent.gulp.src(parent.CONFIG.sass)
                .pipe(parent.sass())
                .pipe(parent.gulp.dest((parent.dist ? parent.CONFIG.distRoot : parent.CONFIG.tmpRoot) + '/assets'));

}

/**
 * Runs task to prepare LESS stylesheet
 */
function LESS(){
        return parent.gulp.src(parent.CONFIG.less)
                .pipe(parent.less())
                .pipe(parent.gulp.dest((parent.dist ? parent.CONFIG.distRoot : parent.CONFIG.tmpRoot) + '/assets'));
}

/**
 * Runs task to prepare head scripts
 */
function HeadScripts(){
        return parent.gulp.src(parent.CONFIG.appHeadScripts)
                //.pipe(parent.concat('dependencies.min.js'))
                //.pipe(parent.gulpIf(parent.dist, parent.uglify()))
                .pipe(parent.gulp.dest((parent.dist ? parent.CONFIG.distRoot : parent.CONFIG.tmpRoot) + '/assets'));
}

/**
 * Runs task to prepare main scripts
 */
function MainScripts(){
        return parent.gulp.src( parent.CONFIG.appScripts )
                //.pipe(parent.concat('app' + (parent.dist ? '.min' : '') + '.js'))
                //.pipe(parent.gulpIf(parent.dist , parent.uglify()))
                .pipe(parent.gulp.dest((parent.dist ? parent.CONFIG.distRoot : parent.CONFIG.tmpRoot) + '/app'));
}

// Register Tasks
parent.gulp.task('Index', Index);
parent.gulp.task('App.Assets', ['Vendor', 'Index']);

parent.gulp.task('HeadScripts', HeadScripts);
parent.gulp.task('MainScripts', MainScripts);
parent.gulp.task('App.Scripts');

parent.gulp.task('SASS', SASS);
parent.gulp.task('LESS', LESS);
parent.gulp.task('App.Styles',['SASS','LESS']);
