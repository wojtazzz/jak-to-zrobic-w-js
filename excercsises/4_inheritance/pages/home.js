var Page = require('./page');

class HomePage extends Page {

  load() {
    super.load("/index.html");
  };

  waitForElement(elem) {
    super.waitForElement(elem, 1000);
  }

  menuItems() {
    return element.all(by.css('ul.nav > li > a'));
  };

  clickMenuAtIdx(idx) {
    this.menuItems().get(idx).click();
  };

  getMenuTextAtIdx(idx) {
    return this.menuItems().get(idx);
  };

  pushNextButton() {
    element(by.css('a.right')).click();
  };

  getCarouselElement() {
    return element(by.css('div.active h1'));
  };

  findDropdown() {
    return element(by.css('.dropdown-menu'));
  };

  findHeadline() {
    const selector = "//h1[contains(text(), 'Example headline 2')]";
    return element(by.xpath(selector));
  };

}

module.exports = new HomePage();