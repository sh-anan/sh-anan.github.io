/**
 * Created by anan on 18/6/13.
 */
var
    g = require('gulp'),// 引入gulp
    sass = require('gulp-ruby-sass'), // 引入gulp-ruby-sass （ 编译scss ）
    connect = require('gulp-connect'), // 引入gulp-connect （ 创建本地服务器 ）
    px2rem = require('gulp-px2rem-plugin'), // 引入px转化为rem的插件
    sourcemaps = require('gulp-sourcemaps'); // 生成sourcemaps文件
// 生成一个任务 任务名为connect
g.task('connect', function () {
    connect.server({
        root: './',
        livereload: true,
        host:'192.168.169.134'
    });
});
// 生成一个任务 任务名为sass
g.task('sass', function () {
    // 使用sass插件 第一个参数是要操作文件的路径
    // 使用sass插件 第二个参数是配置项 1-》是否生成sourcemaps文件 2-》输出的格式
    sass('scss/*.scss', {
        sourcemap: true,
        style: 'compact'
    })
    //  .pipe 连接符
        .pipe(px2rem({ // 使用px转化rem
            width_design: '750', // 设计稿的尺寸 （ 不加尺寸单位 ）
            valid_num: 6, // 转为rem后保留几位
            ignore_px: [1] // 几像素不转为rem  这里是1px不转化
        }))
        .pipe(sourcemaps.write())
        .pipe(sourcemaps.write('maps', {
            includeContent: false,
            sourceRoot: 'scss'
        }))
        .pipe(g.dest('css')); // 文件输出路径
});

// gulp.task 生成一个任务 task(name,function(){  do somethings  })
// gulp.src  需要操作或者监听的文件路径 src('src')
// gulp.dest 操作后的文件输出路径 dest('build')
// gulp.watch 监听文件  watch('src',[taskName])
// .pipe 链接 把api连起来写 比如 src('scss/*.scss').pipe(taskName).pipe(dest('buildSrc'))
g.task('watch', function () {
    // 监听文件是否变化 第一个参数是要监听的文件路径 第二个参数是如果发生改变后要执行的方法
    g.watch('./scss/*.scss', ['sass']);
});

// default是gulp的默认任务 终端输入gulp 可以执行 第二个参数是所执行的任务集合
g.task('default', ['sass', 'watch','connect'], function () {

});
