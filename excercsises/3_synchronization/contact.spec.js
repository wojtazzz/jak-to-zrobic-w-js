var contactPage = require('./pages/contact');

describe('Protractor Workshop app', function () {

	beforeEach(function () {
		contactPage.get();
	});

	it('hould have Contact page with title "Protractor workshop | Contact us"', function () {
		expect(contactPage.getTitle()).toEqual("Protractor workshop | Contact us");
	});

	it('should display text "Your message has been sent." when user sends message  ', function () {
		var name = element(by.id('name'));
		var mail = element(by.id('email'));
		var yourMessage = element(by.id('content'));
		var submitButton = element(by.xpath('//button[@class="btn"]'));
		var lastMessage = element(by.xpath('//span[@class="span6 message"]/h3[1]'));

		name.sendKeys('Test');
		mail.sendKeys('xx@xx.pl');
		yourMessage.sendKeys('Testowa wiadomosc');

		submitButton.click();
		expect(lastMessage.getText()).toEqual("Your message has been sent.");



	});

});
