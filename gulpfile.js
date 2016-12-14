var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');

gulp.task('default', function(){
	console.log('yep, it works'); 
})

gulp.task('jade', function(){
	gulp.src('index.jade')
	.pipe(jade())
	.pipe(gulp.dest('./build/'))
});

gulp.task('sass', function(){
	gulp.src('./sass/main.sass')
	.pipe(sass())
	.pipe(gulp.dest('./build/css'))
});

gulp.task('coffee', function(){
	gulp.src(['./coffee/common.coffee', './coffee/app.coffee'])
	.pipe(coffee())
	.pipe(gulp.dest('./build/js'))
});

gulp.task('watch', function(){
	gulp.watch('*.jade', function(event){
		gulp.run('jade');
	});
	gulp.watch('./sass/**/*.sass', function(event){
		gulp.run('sass');
	});
	gulp.watch('./coffee/**/*.coffee', function(event){
		gulp.run('coffee');
	});
});