var EventPage = function() {

  this.content = element(by.css('div.entry-content')).all(by.tagName('p'));

  this.get = function() {
    browser.driver.get('http://aadays.pl/o-wydarzeniu/');
  };

  this.getTitle = function() {
    return browser.driver.getTitle();
  };

  this.getContentTexts = function() {
    var allTexts = this.content.
      .reduce(function(acc, elem) {
        return elem.getText().then(function(text) {
          return acc + text + ' ';
        });
      });
    return allTexts;
  };

};

module.exports = new EventPage();
