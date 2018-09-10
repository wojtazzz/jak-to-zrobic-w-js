var Contact = function () {

  this.menuItems = element.all(by.css('ul.nav > li > a'));
  this.fieldsetItems = $$('#name, #email, #content');
  this.buttonSend = element(by.xpath('//button[@class="btn"]'));
  this.visibleMessage = element(by.xpath('//span[@class="span6 message"]/h3'));

  this.get = function () {
    browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/contact.html');
  };

  this.getTitle = function () {
    return browser.driver.getTitle();
  };

  this.checkTitle = function () {
    var until = protractor.ExpectedConditions;
		var expectedTitle = "Protractor workshop | Contact us"

		browser.wait(until.titleContains(expectedTitle), 5000);
  };

  this.sendMessages = function () {
    this.fieldsetItems.sendKeys("aa");

  }

  this.clickMenuItemAt = function (idx) {
    this.menuItems.get(idx).click();
  };

  this.clickFieldsetItemAt = function (idx, text) {
    this.fieldsetItems.get(idx).sendKeys(text);
  };

  this.clickButton = function () {
    this.buttonSend.click();
  };

  this.checkReturnMessage = function () {
    var until = protractor.ExpectedConditions;
    var visibleMessage = element(by.xpath('//span[@class="span6 message"]/h3'));
    var expectedMessage = "Your message has been sent.";

    browser.wait(until.textToBePresentInElement(visibleMessage, expectedMessage), 5000);
  };
};

module.exports = new Contact();
