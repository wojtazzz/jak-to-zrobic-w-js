var HomePage = function () {

  this.menuItems = element.all(by.css('ul.nav > li > a'));
  this.dropdownBtn = element(by.xpath('//b[@class="caret"]'));
  this.dropdownOpen = element(by.xpath('//ul[@class="dropdown-menu"]'));

  this.get = function () {
    browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/');
  };

  this.getTitle = function () {
    return browser.driver.getTitle();
  };

  this.clickMenuAtIdx = function (idx) {
    this.menuItems.get(idx).click();
  };

  this.getMenuTextAtIdx = function (idx) {
    return this.menuItems.get(idx);
  };

};

module.exports = new HomePage();
