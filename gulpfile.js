var protractor = require("gulp-protractor").protractor;
var gulp = require('gulp');
var process = require('process');
var del = require('del');


var tests = {
    '1': "excercsises/1_introduction/conf.js",
    '2': "excercsises/2_page_object/conf.js",
    '3': "excercsises/3_synchronization/conf.js"
};

gulp.task('task', function () {
    var options = process.argv.slice(-1);
    runTest(options);
});


gulp.task('before', function () {
    return del('screenshots');
});


gulp.task('test', async function () {
    for (let i = 1; i <= 3; i++) {
        runTest(i);
    }
});

gulp.task('default', gulp.series(gulp.parallel('before', 'test')));



function runTest(index){
     gulp.src(["excercsises/*js"])
            .pipe(protractor({
                configFile: tests[index]
            }))
            .on('error', function (e) {
                throw e;
    });
}

// before (czyścić) i after + default (zaleznosci) 