var Page = require('./page.js');

var HomePage = function () {

  /**
   * Call super constructor.
   */
  Page.call(this);

  /**
   * Self reference.
   */
  var self = this;

  //this.footer = require('../modules/footer');

  this.get = function () {
    this.load('/');
    this.logNavigationTiming();
  };

  this.getTitle = function () {
    return browser.driver.getTitle();
  };

  this.clickRegisterButton = function () {
    this.registerButton.click();
  };

  this.scrolltoLocationSection = function () { // At this moment, we don't need this function
    var sectionPlace = element(by.xpath('//h3[contains(text(),"Place")]'));
    this.scrollToElement(sectionPlace)
  };

};

HomePage.prototype = Object.create(Page.prototype);
HomePage.prototype.constructor = HomePage;

module.exports = new HomePage();
