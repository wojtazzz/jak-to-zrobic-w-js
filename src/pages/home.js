var HomePage = function() {

  this.registerButton = element(by.css('a.btn-big'));
  this.pageSections = element.all(by.css('div.frontpage-block-wrap > h3'));

  this.get = function() {
    browser.driver.get('http://aadays.pl/');
  };

  this.getTitle = function() {
    return browser.driver.getTitle();
  };

  this.clickRegisterButton = function() {
    this.registerButton.click();
  };

  this.getPageSectionHeaderByIdx = function(idx){
    return this.pageSections.get(idx).getText()
  }

};

module.exports = new HomePage();
