var Lesson1Page = function() {

  this.navBrand = element(by.css('.navbar-brand'));
  this.menuLinks = element(by.css('ul.nav.navbar-nav')).all(by.tagName('a'));

  this.get = function() {
    browser.driver.get('http://localhost:8888/pages/lesson1.html');
  };

  this.getTitle = function() {
    return browser.driver.getTitle();
  };

  this.getNavBrandText = function() {
    return this.navBrand.getText();
  };

};

module.exports = new Lesson1Page();
