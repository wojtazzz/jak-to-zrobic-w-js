var Contact = function () {

  this.menuItems = element.all(by.css('ul.nav > li > a'));
  this.fieldsetItems = element.all(by.css('#name, #email, #content'));
  this.buttonSend = element(by.xpath('//button[@class="btn"]'));

  this.get = function () {
    browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/contact.html');
  };

  this.getTitle = function () {
    return browser.driver.getTitle();
  };

  this.sendMessages = function () {
    this.fieldsetItems.sendKeys("aa");

  }

  this.clickMenuItemAt = function (idx) {
    this.menuItems.get(idx).click();
  };

  this.clickFieldsetItemAt = function (idx, text) {
    this.fieldsetItems.get(idx).sendKeys(text);
  };

  this.clickButton = function () {
    this.buttonSend.click();
  };
};

module.exports = new Contact();
