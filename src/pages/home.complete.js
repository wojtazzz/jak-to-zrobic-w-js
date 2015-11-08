var Page = require('./page.js');

var HomePage = function() {

  /**
   * Call super constructor.
   */
  Page.call(this);

  /**
   * Self reference.
   */
  var self = this;

  this.navBrand = element(by.css('.navbar-brand'));

  this.menu = require('../modules/menu');

  this.get = function() {
    this.load('/');
    this.logNavigationTiming();
  };

  this.getTitle = function() {
    return browser.driver.getTitle();
  };

  this.getNavBrandText = function() {
    return this.navBrand.getText();
  };

};

HomePage.prototype = Object.create(Page.prototype);
HomePage.prototype.constructor = HomePage;

module.exports = new HomePage();
