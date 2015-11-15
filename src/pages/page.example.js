var clc = require('cli-color');

var Page = function () {

};

/**
 * Sets logging mode
 * @returns A page title.
 */
Page.prototype.logEnabled = true;

/**
 * Gets page title.
 * @returns A page title.
 */
Page.prototype.getTitle = function() {
  return browser.driver.getTitle();
};

/**
 * Loads given url in the browser
 * @param url
 * @returns A promise which is fulfilled when url is loaded
 */
Page.prototype.load = function (url) {
    this.log('load', url);
    browser.get('http://aadays.pl/' + url);
};

Page.prototype.log = function (message) {
    if (this.logEnabled) {
        console.error.apply(console, [clc.cyan('DEBUG|')].concat(Array.prototype.slice.call(arguments)));
    }
};

module.exports = Page;
