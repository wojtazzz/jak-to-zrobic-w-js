var clc = require('cli-color');

var Page = function () { };

Page.prototype.logEnabled = true;

Page.prototype.load = function (url) {
    this.log('load', url);
    browser.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js' + url);
};

Page.prototype.getTitle = function () {
    return browser.driver.getTitle();
};

Page.prototype.log = function (message) {
    if (this.logEnabled) {
        console.error.apply(console, [clc.cyan('DEBUG|')].concat(Array.prototype.slice.call(arguments)));
    }
};

module.exports = Page;
