var HomePage = function () {

  this.menuItems = element.all(by.css('ul.nav > li > a'));
  this.dropdownBtn = element(by.xpath('//b[@class="caret"]'));
  this.dropdownOpen = element(by.xpath('//ul[@class="dropdown-menu"]'));
  this.activeCarouselHeader = element(by.css('div.active h1'));
  this.nextButton = element(by.css('a.right'));

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

  this.dropdownArrowButtonClick = function () {
    this.dropdownBtn.click();
  };

  this.checkIfDropdownListShowsUp = function () {
    var dropdownOpen = element(by.xpath('//ul[@class="dropdown-menu"]'));
    var until = protractor.ExpectedConditions;
    
    browser.wait(until.visibilityOf(dropdownOpen, 5000));
  };

  this.clickNextButton = function () {
    this.nextButton.click();
  };

  this.haveRightCarouselItem = function () {
    var expectedHeader = 'Example Headline 2'
    var activeCarouselHeader = element(by.css('div.active h1'));
    var until = protractor.ExpectedConditions;

    browser.wait(until.textToBePresentInElement(activeCarouselHeader, expectedHeader), 5000);
  };
};

module.exports = new HomePage();
