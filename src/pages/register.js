var RegisterPage = function() {

  this.mainHeader = element(by.css('div.bg-header h3'));

  this.get = function() {
    browser.driver.get('http://rejestracja.aadays.pl/zaloguj');
  };

  this.getTitle = function() {
    return browser.driver.getTitle();
  };

  this.getMainHeader = function() {
    return this.mainHeader.getText();
  };

};

module.exports = new RegisterPage();
