/**
 * Defines gulp tasks.
 */
(function () {
    'use strict';

    var gulp = require('gulp'),
        protractor = require('gulp-protractor').protractor,
        jscsStylish = require('gulp-jscs-stylish'),
        jshint = require('gulp-jshint'),
        jscs = require('gulp-jscs'),
        runSequence = require('run-sequence'),
		    connect = require('gulp-connect');
    /**
     * Runs Protractor tests with given suite name.
     * @param suiteName
     * @returns {*}
     */

    function runSpec(confName, suiteName) {
        return gulp.src([])
            .pipe(protractor({
                configFile: confName,
                args: ['--suite', suiteName]
            }))
            .on('end', function() {
                console.log('Test completed.');
            })
            .on('error', function (e) {
                throw e
            });
    }

	gulp.task('webserver', function() {
		connect.server({
			root: ['.', 'test-app'],
      port: 8888
		});
	});


    /**
     * Runs the 'test' suite.
     */
    gulp.task('test-test', function () {

        return runSpec('test');

    });

	 /**
     * Runs the 'minimal' specification.
     */
    gulp.task('test-minimal', function () {

      return runSpec('conf/minimal.js', '');

    });

    /**
      * Runs the 'minimal' specification with jasmine reporter.
      */
    gulp.task('test-with-reporter', function () {

      return runSpec('conf/with_reporter.js', '');

    });

    /**
      * Runs the 'home' specification with jasmine reporter.
      */

    gulp.task('test-home', function () {

        return runSpec('conf/home.js', '');

    });

    /**
     * Runs the 'smoke' suite.
     */
    gulp.task('test-smoke', function () {

      return runSpec('conf/smoke.js', '');

    });

    /**
      * Runs the 'home' specification with jasmine reporter.
      */

    gulp.task('test-complete', function () {

        return runSpec('conf/complete.js', '');

    });

    /**
     * Runs JSHint analysis on source code.
     */
    gulp.task('jshint', function () {

        return gulp.src(['./src/**/*.js', './tools/**/*.js'])
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'));

    });

    /**
     * Runs JSCS analysis on source code.
     */
    gulp.task('jscs', function () {

        return gulp.src(['./src/**/*.js', './tools/**/*.js'])
            .pipe(jscs())
            .on('error', function () {})
            .pipe(jscsStylish());

    });

    /**
     * Runs JSHint and JSCS analysis on source code.
     */
    gulp.task('static-analysis', function (callback) {

        callback = callback || function () {};

        runSequence('jshint', 'jscs', callback);

    });

})();
