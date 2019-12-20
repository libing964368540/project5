    // 引入gulp及各种组件：

    var gulp=require('gulp'),

        uglify=require('gulp-uglify'),

        minifyCSS=require('gulp-minify-css'),

        sass=require('gulp-sass'),

        jshint=require('gulp-jshint'),

        concat=require('gulp-concat'),

        rename=require('gulp-rename'),

        // imagemin=require('gulp-imagemin'),

        pngquant=require('imagemin-pngquant'),

        browserSync=require('browser-sync').create();



    // 设置各种输入输出文件夹的位置：

    var srcScript='./src/js/*.js',

        dstScript='./dist/js',

        srcCss='./src/css/*.css'

        dstCss='./dist/css',

        srcSass='./src/css/*.scss',

        dstSass='./dist/css',

        srcImage='./src/img/*.*',

        dstImage='./dist/img',

        srcHtml='./src/index.html',

        dstHtml='./dist',

        reload=browserSync.reload;



   // 处理js文件:压缩,然后换个名输出;

   //命令行使用gulp script启用此任务;

   gulp.task('script',function(){

     gulp.src(srcScript)

         .pipe(concat('all.js'))

         .pipe(gulp.dest(dstScript))

         .pipe(rename('all.min.js'))

         .pipe(uglify())

         .pipe(gulp.dest(dstScript));

   });



   // 检查脚本:

   gulp.task('lint',function(){

     gulp.src(srcScript)

         .pipe(jshint())

         .pipe(jshint.reporter('default'));

   });


  // 处理css文件:压缩，然后换个名在输出;

  // 命令行使用gulp css启动此任务;

  gulp.task('css',function(){

    gulp.src(srcCss)

        .pipe(minifyCSS())

        .pipe(gulp.dest(dstCss));

  });



  //SASS文件输出CSS,天生自带压缩特效;

  //命令行使用gulp sass启用此任务;

  gulp.task('sass', function() {

      gulp.src(srcSass)

          .pipe(sass({

              outputStyle: 'compressed'

          }))

          .pipe(gulp.dest(dstSass))

          .pipe(reload({stream: true}));

  });

      gulp.task('default', ['serve']);



  //图片压缩任务,支持JPEG、PNG及GIF文件;

  //命令行使用gulp jpgmin启用此任务;

  // gulp.task('testImagemin', function(){
  //
  //   return gulp.src('./src/img/*.{png,jpg,gif,svg}') // 指明源文件路径、并进行文件匹配
  //
  //     .pipe(imagemin({
  //
  //       progressive: true, // 无损压缩JPG图片
  //
  //       svgoPlugins: [{removeViewBox: false}], // 不移除svg的viewbox属性
  //
  //       use: [pngquant()] // 使用pngquant插件进行深度压缩
  //
  //     }))
  //
  //     .pipe(gulp.dest(dstImage)); // 输出路径
  //
  // });



  //把所有html页面扔进dist文件夹(不作处理);

  //命令行使用gulp html启用此任务;

  gulp.task('html', function() {

      gulp.src(srcHtml)

          .pipe(gulp.dest(dstHtml));

  });



  //服务器任务:以dist文件夹为基础,启动服务器;

  //命令行使用gulp server启用此任务;

  gulp.task('server', function() {

      browserSync.init({

          server: "./dist"

      });

  });



  //监控改动并自动刷新任务;

  //命令行使用gulp auto启动;

  gulp.task('auto', function() {

      gulp.watch(srcScript, ['script']);

      gulp.watch(srcCss, ['css']);

      gulp.watch(srcSass, ['sass']);

      gulp.watch(srcImage, ['testImagemin']);

      gulp.watch(srcHtml, ['html']);

      gulp.watch('./dist/*.html').on('change', reload);

  });



//gulp默认任务(集体走一遍,然后开监控);

gulp.task('default', ['script', 'css', 'sass', 'html', 'server', 'lint', 'auto']);
