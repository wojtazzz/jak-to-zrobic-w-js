var contactPage = require('./pages/contact');

describe('Protractor Workshop app', function () {

	beforeEach(function () {
		contactPage.get();
	});

	it('should have Contact page with title "Protractor workshop | Contact us"', function () {
		expect(contactPage.getTitle()).toEqual("Protractor workshop | Contact us");
	});

	it('should display text "Your message has been sent." when user sends message  ', function () {
		insertData();
		contactPage.pushSubmit();
		var EC = protractor.ExpectedConditions;
		const newLocal = 'Your message has been sent.';
		var expectedElement = contactPage.findElementByText(newLocal, 'h3');
		browser.wait(EC.visibilityOf(expectedElement), 10000, 'Element still not exist');
		expect(expectedElement.getText()).toEqual(newLocal);	

	});

});
function insertData() {
	var nameElement = contactPage.getInputNameElement();
	contactPage.sendTextToElement("Jarosław", nameElement);
	var emailElement = contactPage.getInputEmailElement();
	contactPage.sendTextToElement("jaroslaw@testowy.pl", emailElement);
	var messageElement = contactPage.getInputMessageElement();
	contactPage.sendTextToElement("please contact with me", messageElement);
}

