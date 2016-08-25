var gulp = require("gulp");
var browsersync = require("browser-sync");
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var inject = require("gulp-inject");
var sourcemaps = require("gulp-sourcemaps");
var series = require("stream-series");

Files = {
	scss:
	['./scss/main.scss', './scss/partials/_grid.scss','./scss/modules/_base.scss', './scss/modules/_mixin.scss', './scss/modules/_fonts.scss', './scss/partials/_content.scss', './scss/partials/_header.scss', './scss/partials/_footer.scss'],
	html: './index.html',
	js : ['./js/vendor/jquery-3.1.0.min.js','./js/app.js', '.js/jquery.bxslider.js']
};

gulp.task('inject', ['sass'], function (){
	var target = gulp.src('./index.html');
  	var sources = gulp.src(['./js/vendor/jquery-3.1.0.min.js', './css/jquery.bxslider.css' ], 
  		{read: false});

var sources2 = gulp.src(['./js/app.js'], 
  		{read: false});
var sources3 = gulp.src(['./css/fontello.css'], 
  		{read: false});
var sources4 = gulp.src(['./css/style.css'], 
  		{read: false});
var sources5 = gulp.src(['./js/jquery.bxslider.js'],
		{read:false});
	return target.pipe(inject(series(sources,sources2,sources3,sources4,sources5)))
	.pipe(gulp.dest('./'));


});


gulp.task('sass', function(){
	
	return gulp.src('./scss/main.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(sourcemaps.write())
	.pipe(rename('style.css'))
	.pipe(gulp.dest('./css'));

});
gulp.task('default', ['inject'], function(){

browsersync.init({
	server:{
		baseDir: "./"
	}});
	gulp.watch(Files.html).on("change", browsersync.reload);
	gulp.watch(Files.scss, ['inject']);
	gulp.watch(Files.js, ['inject']);
});

