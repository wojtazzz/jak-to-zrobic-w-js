var contact = require('./pages/contact');

describe('Protractor Workshop app', function() {

	beforeEach(function () {
		contact.get();
	});

	it('hould have Contact page with title "Protractor workshop | Contact us"', function(){
		expect(contact.getTitle()).toEqual("Protractor workshop | Contact us");
	});

	it('should display text "Your message has been sent." when user sends message  ', function(){
		contact.sendName('Bartek');
		contact.sendEmail('cos@gmail.con');
		contact.sendMsg('hello');
		contact.clickSubmit();
		var EC = protractor.ExpectedConditions;
		var DisplayMessage = "Your message has been sent.";
		var Message = contact.findMessageBy(DisplayMessage, 'h3');
		browser.wait(EC.visibilityOf(Message), 15000);
		expect(Message.isDisplayed()).toBe(true);
		
		
		

	});

});
