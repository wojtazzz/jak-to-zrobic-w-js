var ContactPage = function() {

  this.menuItems = element.all(by.css('ul.nav > li > a')); 
  this.sectionItems = element.all(by.xpath('//h3'));

  this.get = function() {
    browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/contact.html');
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
  
  this.compareSection = function(a, b) {
	    this.sectionItems.then(function (items) {
			expect(items[0].getText()).toBe(a);
			expect(items[1].getText()).toBe(b);
		});;

    
  };
};

module.exports = new ContactPage();
