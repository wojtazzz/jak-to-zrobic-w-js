var protractor = require("gulp-protractor").protractor;
var gulp = require("gulp");
var process = require("process");
var del = require("del");
var jshint = require("gulp-jshint");


var tests = {
    "1": "excercsises/1_introduction/conf.js",
    "2": "excercsises/2_page_object/conf.js",
    "3": "excercsises/3_synchronization/conf.js",
    "4": "excercsises/4_inheritance/conf.js"
};

gulp.task("runtest", async function () {
    var options = process.argv.slice(-1);
    runTest(options);
});


gulp.task("before", function () {
    return del("screenshots");
});


gulp.task("test", async function () {
     for (var i = 1; i <= 4; i++) {
        runTest(i);
    }
});

gulp.task("lint", function(){
       return gulp.src(["excercsises/*/*.js"])
        .pipe(jshint(".jshintrc"))
        .pipe(jshint.reporter("jshint-table-reporter"));
});

function runTest(index){
    gulp.src(["excercsises/*js"])
           .pipe(protractor({
               configFile: tests[index]
           }))
           .on("error", function (e) {
               throw e;
   });
}

gulp.task("default", gulp.parallel("before", "test", "lint"));