var Page = require('./page');

var Contact = function () {

  Page.call(this);

  this.menuItems = element.all(by.css('ul.nav > li > a'));

  this.get = function () {
    browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/contact.html');
  };

  this.clickMenuItemAt = function (idx) {
    this.menuItems.get(idx).click();
  };

};

Contact.prototype = Object.create(Page.prototype);
Contact.prototype.constructor = Contact;

module.exports = new Contact();