var
	gulp    = require('gulp'),
	util    = require('gulp-util'),
	connect = require('gulp-connect'),
	concat  = require('gulp-concat'),
	coffee  = require('gulp-coffee'),
	uglify  = require('gulp-uglify'),
	rename  = require('gulp-rename'),
    less    = require('gulp-less'),
	phplint = require('phplint').lint;


gulp.task('less', function() {
    gulp.src('./app/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./app/css'))
        .pipe(connect.reload());
});

gulp.task('coffee', function() {
    gulp.src('./app/coffee/*.coffee')
        .pipe(coffee({bare: true}).on('error', util.log))
        .pipe(gulp.dest('./app/js/'))
        .pipe(connect.reload());
});

gulp.task('js', function() {
    gulp.src('./app/js/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./app/dist/'))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('./app/dist/'))
        .pipe(connect.reload());
});

gulp.task('phplint', function(callback) {
	phplint(['./app/php/**/*.php'], function(err, stdout, stderr) {
		if(err) {
			util.log(err);
		}
		callback.call(null, err);
	});
});

gulp.task('serve', function() {
    connect.server({
        livereload : true,
        port       : 8080
    });
});

gulp.task('watch', function() {
    gulp.watch('./app/coffee/*.coffee', ['coffee']);
    gulp.watch('./app/less/*.less', ['less']);
    gulp.watch('./app/js/*.js', ['js']);
    gulp.watch('./app/php/**/*.php', ['phplint']);
});

gulp.task('default', ['less', 'coffee', 'js', 'serve', 'watch']);
