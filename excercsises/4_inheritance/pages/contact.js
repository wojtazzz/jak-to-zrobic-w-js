var Page = require('./page');

var Contact = function () {

  Page.call(this);

  this.getInTouchItems = element.all(by.css('#name, #email, #content')); // $('#name')
  this.buttonSend = element(by.xpath('//button[@class="btn"]'));
  this.lastMessage = element(by.xpath('//span[@class="span6 message"]/h3'));

  this.get = function () {
    browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/contact.html');
  };

  this.sendMessages = function () {
    this.getInTouchItems.sendKeys("aa");

  }

  this.clickButton = function () {
    this.buttonSend.click();
  };

  this.checkMessage = function () {
    expect(this.lastMessage.getText()).toEqual("Your message has been sent.");
  };
};

Contact.prototype = Object.create(Page.prototype);
Contact.prototype.constructor = Contact;

module.exports = new Contact();
