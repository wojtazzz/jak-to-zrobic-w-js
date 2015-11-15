var Footer = function() {

  this.footerLinks = element(by.css('ul.footer-menu')).all(by.tagName('a'));

  this.getfooterLinksText =  function() {
    return this.menuLinks.map(function(elm, index) {
      return {
        index: index,
        text: elm.getText(),
        //class: elm.getAttribute('class')
      };
    });
  };

  // this.clickOnAbout = function(){
  //   this.menuLinks.filter(function(elem, index) {
  //     return elem.getText().then(function(text) {
  //       return text === 'O wydarzeniu';
  //     });
  //   }).then(function(filteredElements) {
  //     filteredElements[0].click();
  //   });
  // };

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

module.exports = new Footer();
