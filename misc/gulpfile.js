// gulpプラグインの読みこみ
var gulp = require('gulp');

// browser-syncのプラグインの読み込み
var browserSync = require("browser-sync");

// タスクの設定
gulp.task("browserSyncTask", function () {
    browserSync({
        server: {
            baseDir: "src"
        }
    });

    // srcフォルダ以下のファイルを監視
    gulp.watch("src/**", function() {
        browserSync.reload();
    });
});

gulp.task("release", function () {
    return gulp.src(['src/*.html', 'src/css/**', 'src/js/**','src/image/**'],{base: 'src'})
    .pipe(gulp.dest('docs'));
});
gulp.task("default",["browserSyncTask"]);
