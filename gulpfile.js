//公共插件
var path = require('path');
var args = require('yargs').argv;
var gulp = require('gulp');
var webpack2 = require('webpack');
var webpackStream = require('webpack-stream');

var fs = require('fs');
var del = require('del');

process.setMaxListeners(0);


var currentPath = __dirname;
var srcRootPath = path.join(__dirname, '/src/');
var destRootPath = path.join(__dirname, '/dist/');
var destPath = path.join(__dirname, '/dist/');

console.log(currentPath);
console.log(srcRootPath);
console.log(destRootPath);
console.log(destPath);

function showError(error) {
	console.log(error.toString());
	this.emit('end');
}

// 复制所有合适文件到目标目录
gulp.task('copy', function () {
	console.log('copy task start');
	return gulp.src([
		currentPath + '/**/*.*',
		'!webpack.config.js',
		'!gulpfile.js',
		'!*.json',
		'!node_modules/**/*.*'
	], {base: srcRootPath}).pipe(gulp.dest(destRootPath));

});

// Webpack编译
gulp.task('webpack', ['copy'], function () {
	var webpackConfig = require(currentPath + '/webpack.config.js');

	console.log('webpack task start');
	return gulp.src(currentPath + '/js/*.js')
		.pipe(webpackStream(webpackConfig, webpack2))
		.on('error', showError)
		.pipe(gulp.dest(destPath + '/js'));
});


//编译流程

//监听文件变化
gulp.task('watch', function () {
	gulp.watch(['**/*.*', '!profile.json', '!gulpfile.js']);
});

//执行开发环境编译
gulp.task('default', ['webpack']);
