var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var open = require('gulp-open');
var del = require('del');
var ngAnnotate = require('gulp-ng-annotate');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');

var buildDirName = 'build/',
  config = {
  src: {
    libs: [
      './bower_components/angular/angular.min.js',
      './bower_components/angular-ui-router/release/angular-ui-router.min.js',
      './bower_components/jquery/dist/jquery.min.js',
      './bower_components/PubSub/pubsub.min.js'
    ]
  },
  build: {
    path: './' + buildDirName + '/'
  }
};

gulp.task('clean', function () {
    return del([ config.build.path ]);
});

gulp.task('build', function () {
    runSequence('clean', ['index', 'projects', 'sass', 'coffee', 'assets', 'templates', 'libs']);
});

gulp.task('index', function () {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./'))
        .pipe(connect.reload());
});

gulp.task('projects', function () {
    return gulp.src('./src/assets/projects.js')
        .pipe(gulp.dest( config.build.path ))
        .pipe(connect.reload());
});

gulp.task('sass', function () {
    return gulp.src('./src/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest( config.build.path ))
        .pipe(connect.reload());
});

gulp.task('coffee', function() {
    return gulp.src('./src/**/*.coffee')
        //.pipe(stripDebug())
        .pipe(coffee({bare: true})
        .on('error', function(e) {
          console.log('coffee error:', e);
        }))
        .pipe(concat('script.min.js'))
        .pipe(ngAnnotate())
        //.pipe(uglify({
        //    preserveComments: 'all'
        //}))
        .pipe(gulp.dest( config.build.path ))
        .pipe(connect.reload());
});

gulp.task('libs', function () {
    return gulp.src(config.src.libs)
        .pipe(concat('libs.min.js'))
        .pipe(gulp.dest( config.build.path ));
});

gulp.task('templates', function () {
    return gulp.src('./src/**/*.html')
        .pipe(templateCache({
          module: 'app'
        }))
        .pipe(gulp.dest( config.build.path ))
        .pipe(connect.reload());
});

gulp.task('assets', function () {
    return gulp.src('./src/assets/build/**/*')
        .pipe(gulp.dest( config.build.path + 'assets'))
        .pipe(connect.reload());
});

gulp.task('connect', function () {
    return connect.server({
        livereload: true
    });
});

gulp.task('watch', function () {
    gulp.watch([ './src/index.html'             ], [ 'index'     ]);
    gulp.watch([ './src/**/*.sass'              ], [ 'sass'      ]);
    gulp.watch([ './src/**/*.coffee'            ], [ 'coffee'    ]);
    gulp.watch([ './src/**/*.png'               ], [ 'images'    ]);
    gulp.watch([ './src/app/**/*.html'          ], [ 'templates' ]);
    gulp.watch([ './src/assets/projects.js'     ], [ 'projects'  ]);
});

gulp.task('open_chrome', function () {
    //'google-chrome' // Linux
    //'chrome' // Windows
    //'google chrome' or 'Google Chrome' // OSX
    return gulp.src('')
        .pipe(open({
            app: 'chrome',
            uri: 'http://localhost:8080'
        }));
});

gulp.task('run', function () {
    runSequence('build', 'connect', 'watch', 'open_chrome');
});
