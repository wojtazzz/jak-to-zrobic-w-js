var contact = require(browser.__pagesDir + '/contact');

describe('How to do it in JS homepage', function () {

	beforeEach(function () {
		contact.get();
	});

	it('should have Protractor workshop | Contact us', function () {
		expect(contact.getTitle()).toEqual("Protractor workshop | Contact us");
	});

	it('should display text "Your message has been sent." when user sends message  ', function () {		
		contact.sendMessages();
		contact.clickButton();
		contact.checkMessage();
	});

});