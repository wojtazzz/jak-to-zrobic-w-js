var contactPage = require('./pages/contact');

describe('Protractor Workshop app', function () {

	beforeEach(function () {
		contactPage.get();
	});

	it('hould have Contact page with title "Protractor workshop | Contact us"', function () {
		var until = protractor.ExpectedConditions;
		var expectedTitle = "Protractor workshop | Contact us"

		browser.wait(until.titleContains(expectedTitle), 5000);

	});

	it('should display text "Your message has been sent." when user sends message  ', function () {
		var visibleMessage = element(by.xpath('//span[@class="span6 message"]/h3'));
		var expectedMessage = "Your message has been sent."
		var until = protractor.ExpectedConditions;

		contactPage.sendMessages();
		contactPage.clickButton();
		browser.wait(until.textToBePresentInElement(visibleMessage, expectedMessage), 5000);

	});

});
