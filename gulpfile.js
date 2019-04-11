var protractor = require("gulp-protractor").protractor;
var gulp = require('gulp'),
jslint = require('./');
var runSequence = require('run-sequence');
var del = require('del');
var jshint = require ("gulp-jshint");
var jshintcli = require('jshint/src/cli');


gulp.task('elo', function () {

    gulp.src(["/home/bartosz/Desktop/Jacek/excercsises/3_synchronization/contact.spec.js"])
        .pipe(protractor({
            configFile: '/home/bartosz/Desktop/Jacek/excercsises/3_synchronization/conf.js'

        }))
        .on('error', function (e) { throw e; });

});



var exc = {
    "1": "excercsises/1_introduction/conf.js",
    '2': "excercsises/2_page_object/conf.js",
    "3": "excercsises/3_synchronization/conf.js",
   
};



gulp.task('try', function(){

    var queue = process.argv.slice(-1);

    gulp.src(["/*js"])
    .pipe(protractor({
        configFile: exc[queue]
    }))
    .on('error', function(e) {throw e});

});

gulp.task('all-tests', function () {
    for (var i = 1; i <= 3; i++) {
        test2(i)
    };

});

function test2  (index) {
    gulp.src(["/*js"])
        .pipe(protractor({
            configFile: exc[index]
        }))
        .on('error', function (e) { throw e });

};

gulp.task('clean', function(){
    return del.sync('screenshots');
});

gulp.task('before', function(){
    gulp.start('clean');
});



gulp.task('after',function(){
    console.log("finished testing");

});


gulp.task('default', function(){
    gulp.start('before','all-tests', 'after');

});


gulp.task('jslint', function () {
    gulp.src('/*js')
        .pipe(jshint())
        .pipe(jshint.reporter('report'));
});

