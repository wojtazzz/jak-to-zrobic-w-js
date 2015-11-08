exports.config = {

    ///////////////////////////////////////////////////////////////////////////////////
    // Various test running options. Use only one at a time.

    // Use directConnect option to connect directly to Chrome browser, without Selenium. Works only for Chrome and
    // Firefox.
    directConnect: true,
    // Use seleniumAddress option is Selenium server is started manually
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    //seleniumAddress: 'http://hub.browserstack.com/wd/hub',

    // Use seleniumServerJar option to automatically start Selenium server
    //seleniumServerJar: require('selenium-server-standalone-jar').path,

    ///////////////////////////////////////////////////////////////////////////////////

    suites: {
        smoke: 'src/specs/smoke.spec.js',
        full: '../src/specs/complete/**/*.js',
    },

    /// MINIMAL CONFIGURATION END /////////////////////////////////////////////////////

    capabilities: {
        'browserName' : 'firefox',
    },
    onPrepare: function () {
      var jasmineReporters = require('jasmine-reporters'),
          SpecReporter = require('jasmine-spec-reporter'),
          HtmlReporter = require('protractor-html-screenshot-reporter');

      // add jasmine spec reporter
      jasmine.getEnv().addReporter(new SpecReporter({
        displayStacktrace: true
      }));

      jasmine.getEnv().addReporter( new HtmlReporter({
         baseDirectory: 'results/html'
      }));

      browser.ignoreSynchronization = true;
      browser.baseUrl = 'http://localhost:8888';

      // Reference to directories used in requires within source files
      browser.__dataDir = __dirname + '/../data/',
      browser.__pagesDir = __dirname + '/../src/pages/',
      browser.__srcDir = __dirname + '/../src/',

      browser.driver.manage().window().maximize();

  },

  jasmineNodeOpts: {
      onComplete: null,
      isVerbose: true,
      showColors: true,
      defaultTimeoutInterval: 120000, // 2 minutes
      includeStackTrace: true,
      // This line removes the default Protractor 'dot' test result reporter
      // Comment out if you want to see stack traces in case of errors
     print: function () {}
  }

};
