var HomePage = function() {

  this.menuItems = element.all(by.css('ul.nav > li > a')); 

  this.get = function() {
    browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/');
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

  this.getDropdown = function(){
    return element(by.css('.dropdown-menu'));
  };

  this.nextButton = function(){
    return element(by.css('a.right')).click();
  }
  
  this.getHeader2 = function () {
    return element(by.xpath("//h1[contains(text(), 'Example headline 2')]"));
  };
  
};

module.exports = new HomePage();
