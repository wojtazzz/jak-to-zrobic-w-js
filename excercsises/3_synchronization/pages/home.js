var HomePage = function () {

  this.menuItems = element.all(by.css('ul.nav > li > a'));

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

  this.pushNextButton = function () {
    element(by.css('a.right')).click();
  };

  this.getCarouselElement = function () {
    return element(by.css('div.active h1'));
  };

  this.findDropdown = function () {
    return element(by.css('.dropdown-menu'));
  };

  this.findHeadline = function () {
    const selector = "//h1[contains(text(), 'Example headline 2')]";
    return element(by.xpath(selector));
  };
};

module.exports = new HomePage();
