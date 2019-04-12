var Page = require('./page');

var ContactPage = function () {

  this.menuItems = element.all(by.css('ul.nav > li > a'));

  this.get = function () {
    browser.driver.get('contact.html');
  };

  this.getTitle = function () {
    return browser.driver.getTitle();
  };

  this.clickMenuItemAt = function (idx) {
    this.menuItems.get(idx).click();
  };

  ContactPage.prototype.load = function () {
    Page.prototype.load.call(this, "/contact.html");
  };
  this.inputName = function (txt) {
    this.inputNameField = element(by.id("name")).sendKeys(txt);
  };

  this.inputEmail = function (txt) {
    this.inputEmailField = element(by.id("email")).sendKeys(txt);
  };

  this.inputMessage = function (txt) {
    this.inputMsgField = element(by.id('content')).sendKeys(txt);
  };

  this.pushSubmit = function () {
    this.submitButton = element(by.buttonText('Submit')).click();
  };

  this.findElementByText = function (text, tagName = '*') {
    return element(by.xpath("//" + tagName + "[contains(text(), '" + text + "')]"));
  };

};

ContactPage.prototype = Object.create(Page.prototype);
ContactPage.prototype.constructor = ContactPage;

module.exports = new ContactPage();
