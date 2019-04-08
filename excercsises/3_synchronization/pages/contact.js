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

  this.inputName = function (txt) {
    const selector = "name";
    element(by.id(selector)).sendKeys(txt);
  };

  this.inputEmail = function (txt) {
    const selector = "email"
    element(by.id(selector)).sendKeys(txt);
  };

  this.inputMessage = function (txt) {
    const selector = 'content'
    element(by.id(selector)).sendKeys(txt);
  };

  this.pushSubmit = function () {
    const selector = 'Submit';
    element(by.buttonText(selector)).click();
  };

  this.findElementByText = function (text, tagName = '*') {
    return element(by.xpath("//" + tagName + "[contains(text(), '" + text + "')]"));
  };

};

module.exports = new ContactPage();
