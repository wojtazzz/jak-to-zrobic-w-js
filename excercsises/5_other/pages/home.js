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

  this.speakers = element.all(by.css('figcaption'));

  this.footer = require('../modules/footer');

  this.get = function() {
    this.load('/');
    this.logNavigationTiming();
  };

  this.getTitle = function() {
    return browser.driver.getTitle();
  };

  this.clickRegisterButton = function() {
    this.registerButton.click();
  };

  this.getSpeakers = function(){
    return this.speakers.map(function(elm, index) {
      return {
        index: index,
        name: elm.element(by.css('a')).getText()
      };
    });
  };

  this.getSpeakerByIdx = function(idx){
    return this.speakers.get(0).element(by.css('a')).getText();
  };

  this.scrolltoLocationSection = function() {
    var sectionPlace = element(by.xpath('//h3[contains(text(),"Miejsce")]'));
    this.scrollToElement(sectionPlace)
  };

  this.scrolltoSperakersSection = function() {
    var sectionPlace = element(by.xpath('//h3[contains(text(),"Mówcy")]'));
    this.scrollToElement(sectionPlace);
  };
};

HomePage.prototype = Object.create(Page.prototype);
HomePage.prototype.constructor = HomePage;

module.exports = new HomePage();
