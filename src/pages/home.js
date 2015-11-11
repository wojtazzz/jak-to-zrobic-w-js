var HomePage = function() {

  this.registerButton = element(by.css('a.btn-big'));

  this.get = function() {
    browser.driver.get('http://aadays.pl/');
  };

  this.getTitle = function() {
    return browser.driver.getTitle();
  };

  this.clickRegisterButton = function() {
    this.registerButton.click();
  };

};

module.exports = new HomePage();
