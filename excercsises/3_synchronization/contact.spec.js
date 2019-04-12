var contactPage = require('./pages/contact');

describe('Protractor Workshop app', function() {

	beforeEach(function () {
		contactPage.get();
	});
	var ec = protractor.ExpectedConditions;

	it('hould have Contact page with title "Protractor workshop | Contact us"', function(){
		expect(contactPage.getTitle()).toEqual("Protractor workshop | Contact us");
	});

	it('should display text "Your message has been sent." when user sends message  ', function(){
		contactPage.sendName('Bartek');
		contactPage.sendEmail('cos@gmail.con');
		contactPage.sendMsg('hello');
		contactPage.clickSubmit();

		var message = contactPage.findMessageBy();
		browser.wait(ec.visibilityOf(message), 15000);
		expect(message.isDisplayed()).toBe(true);

	});

});
