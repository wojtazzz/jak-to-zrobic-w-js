var ContactPage = function () {

  this.menuItems = element.all(by.css('ul.nav > li > a'));

  this.get = function () {
    browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/contact.html');
  };

  this.getTitle = function () {
    return browser.driver.getTitle();
  };

  this.clickMenuItemAt = function (idx) {
    this.menuItems.get(idx).click();
  };

  this.getInputNameElement = function () {
    return element(by.id("name"));
  };

  this.getInputEmailElement = function () {
    return element(by.id("email"));
  };

  this.getInputMessageElement = function () {
    return element(by.id('content'));
  }

  this.pushSubmit = function () {
    element(by.buttonText('Submit')).click();
  };

  this.sendTextToElement = function (text, elem) {
    elem.sendKeys(text);
  };

  this.findElementByText = function (text, tagName = '*') {
    return element(by.xpath("//" + tagName + "[contains(text(), '" + text + "')]"));
  };

};

module.exports = new ContactPage();
