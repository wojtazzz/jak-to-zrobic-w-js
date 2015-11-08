var HomePage = function() {

  this.navBrand = element(by.css('.navbar-brand'));

  this.get = function() {
    browser.driver.get('http://localhost:8888');
  };

  this.getTitle = function() {
    return browser.driver.getTitle();
  };

  this.getNavBrandText = function() {
    return this.navBrand.getText();
  };

};

module.exports = new HomePage();
