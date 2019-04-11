var contactPage = require('./pages/contact');

describe('Protractor Workshop app', function () {

	beforeEach(function () {
		contactPage.get();
	});

	it('should have Contact page with title "Protractor workshop | Contact us"', function () {
		expect(contactPage.getTitle()).toEqual("Protractor workshop | Contact us");
	});

	it('should display text "Your message has been sent." when user sends message  ', function () {
		insertDataAndSubmit();
		var EC = protractor.ExpectedConditions;
		var newLocal = 'Your message has been sent.';
		var expectedElement = contactPage.findElementByText(newLocal, 'h3');
		browser.wait(EC.visibilityOf(expectedElement), 10000, 'Element still not exist');
		expect(expectedElement.getText()).toEqual(newLocal);

	});

});
function insertDataAndSubmit() {
	contactPage.inputName("Jarosław");
	contactPage.inputEmail("jaroslaw@testowy.pl");
	contactPage.inputMessage("please contact with me");
	contactPage.pushSubmit();
}

