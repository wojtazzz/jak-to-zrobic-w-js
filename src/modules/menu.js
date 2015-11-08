var Menu = function() {

  this.menuLinks = element(by.css('ul.nav.navbar-nav')).all(by.tagName('a'));

  this.getMenuLinksText =  function() {
    return this.menuLinks.map(function(elm, index) {
      return {
        index: index,
        text: elm.getText(),
        class: elm.getAttribute('class')
      };
    });
  };

  this.clickOnLesson1 = function(){
    this.menuLinks.filter(function(elem, index) {
      return elem.getText().then(function(text) {
        return text === 'Lesson 1';
      });
    }).then(function(filteredElements) {
      filteredElements[0].click();
    });
  };

  this.clickOnLink = function(linkName){
    this.menuLinks.filter(function(elem, index) {
      return elem.getText().then(function(text) {
        return text === linkName;
      });
    }).then(function(filteredElements) {
      filteredElements[0].click();
    });
  };

};

module.exports = new Menu();
