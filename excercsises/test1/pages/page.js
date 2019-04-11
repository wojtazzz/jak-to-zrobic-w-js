var Page = function () {};

Page.prototype.logEnabled = true;

Page.prototype.load = function (url) {
    //this.log('load', url);
    browser.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js' + url);
};



Page.prototype.getTitle = function () {
    return browser.driver.getTitle();
};

module.exports = Page;