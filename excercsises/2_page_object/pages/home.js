var HomePage = function() {

  this.menuItems = element.all(by.css('ul.nav > li > a')); 

  this.get = function() {
    browser.driver.get('http://localhost:8888/index.html');
  };

  this.getTitle = function() {
    return browser.driver.getTitle();
  };

  this.clickMenuAtIdx = function(idx) {
    this.menuItems.get(idx).click();
  };

  this.getMenuTextAtIdx = function(idx) {
    return this.menuItems.get(idx);
  };
  
};

module.exports = new HomePage();
