var contactPage = require('./pages/contact');

describe('Protractor Workshop app', function () {

	beforeEach(function () {
		contactPage.get();
	});

	it('hould have Contact page with title "Protractor workshop | Contact us"', function () {
		expect(contactPage.checkTitle());
	});

	it('should display text "Your message has been sent." when user sends message  ', function () {
		contactPage.sendMessages();
		contactPage.clickButton();
		expect(contactPage.checkReturnMessage());

	});

});
