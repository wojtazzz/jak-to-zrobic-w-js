var Page = require('/home/bartosz/Desktop/Jacek/excercsises/test1/pages/page.js');

var HomePage = function() {

  this.menuItems = element.all(by.css('ul.nav > li > a')); 

  Page.call(this);

  
  HomePage.prototype.load = function(){
    Page.prototype.load.call(this, '/index.html');
  }



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

HomePage.prototype = Object.create(Page.prototype);
HomePage.prototype.constructor = HomePage;

module.exports = new HomePage();