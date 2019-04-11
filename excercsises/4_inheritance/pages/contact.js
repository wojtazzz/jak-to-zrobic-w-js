var Contact = function () {

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

};

module.exports = new Contact();
