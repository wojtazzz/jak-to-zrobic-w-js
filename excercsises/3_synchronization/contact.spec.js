var contactPage = require('./pages/contact');

describe('Protractor Workshop app', function() {

	beforeEach(function () {
		contactPage.get();
	});

	it('hould have Contact page with title "Protractor workshop | Contact us"', function(){
		expect(contactPage.getTitle()).toEqual("Protractor workshop | Contact us");
	});

	it('should display text "Your message has been sent." when user sends message  ', function(){
		contactPage.sendName('Bartek');
		contactPage.sendEmail('cos@gmail.con');
		contactPage.sendMsg('hello');
		contactPage.clickSubmit();
		var EC = protractor.ExpectedConditions;
		var DisplayMessage = "Your message has been sent.";
		var Message = contactPage.findMessageBy(DisplayMessage, 'h3');
		browser.wait(EC.visibilityOf(Message), 15000);
		expect(Message.isDisplayed()).toBe(true);
		
		
		

	});

});
