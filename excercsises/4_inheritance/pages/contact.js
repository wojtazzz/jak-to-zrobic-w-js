var Page = require('./page');


class ContactPage extends Page {

  load() {
    super.load("/contact.html");
  };

  waitForElement(elem){
    super.waitForElement(elem, 10000);
  }

  menuItems() {
    element.all(by.css('ul.nav > li > a'));
  };

  get() {
    browser.driver.get('contact.html');
  };

  getTitle() {
    return browser.driver.getTitle();
  };

  clickMenuItemAt(idx) {
    this.menuItems().get(idx).click();
  };

  inputName(txt) {
    this.inputNameField = element(by.id("name")).sendKeys(txt);
  };

  inputEmail(txt) {
    this.inputEmailField = element(by.id("email")).sendKeys(txt);
  };

  inputMessage(txt) {
    this.inputMsgField = element(by.id('content')).sendKeys(txt);
  };

  pushSubmit() {

    this.submitButton = element(by.buttonText('Submit')).click();
  };

  findElementByText(text, tagName = '*') {
    return element(by.xpath("//" + tagName + "[contains(text(), '" + text + "')]"));
  };
}

module.exports = new ContactPage();
