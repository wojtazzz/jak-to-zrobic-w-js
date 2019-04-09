var gulp = require('gulp');

gulp.task('elo', function(){
console.log(process.argv.splice[2])
});

var protractor = require("gulp-protractor").protractor;

var exc = {
    '1': "excercsises/2_page_object/home.spec.js",
    '2': "excercsises/3_synchronization/contact.spec.js",
    '3': "excercsises/3_synchronization/home.spec.js"
};



gulp.task('try', function(){
    
    var queue = process.argv.slice(-1);

    gulp.src(["excercsises/*js"])
    .pipe(protractor({
        configFile: exc[queue]
    }))
    .on('error', function(e) {throw e});

});

gulp.task('before', function(){
    console.log("start")
});


gulp.task('after',function(){
    console.log("finish")

});

