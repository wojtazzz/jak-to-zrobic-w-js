var Page = require('./page.js');

var AboutPage = function () {

  Page.call(this);

  this.get = function () {
    browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/about.html');
  };

  this.speakers = element.all(by.xpath('//li[@class="span4"]'));

  this.getSpeakers = function () {
    return this.speakers.map(function (elm, index) {
      return {
        index: index,
        name: elm.element(by.css('.caption > p:first-child')).getText()
      };
    });
  };

  this.getSpeakerByIdx = function (idx) {
    return this.speakers.get(idx).element(by.xpath('//div[@class="caption"]/p[1]')).getText();
  };

  this.scrolltoSperakersSection = function () {
    var sectionPlace = element(by.xpath('//h2[contains(text(),"Our Team")]'));
    this.scrollToElement(sectionPlace);
  };
};

AboutPage.prototype = Object.create(Page.prototype);
AboutPage.prototype.constructor = AboutPage;

module.exports = new AboutPage();