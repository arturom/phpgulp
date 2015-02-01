var
	gulp    = require('gulp'),
	util    = require('gulp-util'),
	phplint = require('phplint').lint;

gulp.task('default', function() {
	console.log('hello world');
	console.log('hi');
});

gulp.task('phplint', function(callback) {
	phplint(['./php/*.php', './php/nested/inside/*.php'], function(err, stdout, stderr) {
		if(err) {
			console.log(err);
			console.log(err.killed);
			console.log(err.code);
			console.log(err.signal);
			console.log(Object.keys(err));
			console.log(Object.keys(err.constructor.prototype));
			//util.log(err);
		}
		callback.call(null);
	});
});
