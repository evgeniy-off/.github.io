var gulp = require('gulp'), // по имене переменной обращаемся к галп

 browserSync =require('browser-sync').create(),//подкл.сервер на страницу
 less = require('gulp-less'),
 notify = require('gulp-notify'),
 plumber = require('gulp-plumber');

	



gulp.task("server", ['less'], function(){

  browserSync.init({
      server: {baseDir: "./app/"}
  });
			// gulp server - команда запуска сервера  

     gulp.watch('./app/**/*.html').on('change', browserSync.reload); //слежка за файлами html,css
	    gulp.watch('./app/**/*.js').on('change', browserSync.reload);
     gulp.watch('./app/less/**/*.less',['less']);//слежка за файлами less
  
}); 		


//less

gulp.task('less', function(){

gulp.src('./app/less/*.less')
.pipe(plumber({
				errorHandler: notify.onError(function(err){
			return {
				title: 'LESS Error!',
				message: err.message 
			}

					})
	}))

.pipe(less())
.pipe(gulp.dest('./app/css')) // компиляция из Less в css
.pipe(browserSync.stream());  //
	});


//pug




gulp.task('default', ['server']);	// gulp  команда запуска сервера, и галпа одной командой


