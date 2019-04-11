var Page = require('./page');

var HomePage = function() {

  /**
   * Call super constructor.
   */
  Page.call(this);

  /**
   * Self reference.
   */
  var self = this;

  this.menuItems = element.all(by.css('ul.nav > li > a')); 

  HomePage.prototype.load = function () {
    Page.prototype.load.call(this, "/index.html");
  };


  this.clickMenuAtIdx = function(idx) {
    this.menuItems.get(idx).click();
  };

  this.getMenuTextAtIdx = function(idx) {
    return this.menuItems.get(idx);
  };

  this.pushNextButton = function () {
    element(by.css('a.right')).click();
  };

  this.getCarouselElement = function () {
    return element(by.css('div.active h1'));
  };

  this.findDropdown = function () {
    return element(by.css('.dropdown-menu'));
  };

  this.findHeadline = function () {
    const selector = "//h1[contains(text(), 'Example headline 2')]";
    return element(by.xpath(selector));
  };
  
};

HomePage.prototype = Object.create(Page.prototype);
HomePage.prototype.constructor = HomePage;

module.exports = new HomePage();
