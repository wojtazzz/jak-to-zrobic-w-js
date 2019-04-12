var contactPage = require('./pages/contact');

describe('Protractor Workshop app', function () {

	beforeEach(function () {
		contactPage.load();
	});

	it('should have Contact page with title "Protractor workshop | Contact us"', function () {
		expect(contactPage.getTitle()).toEqual("Protractor workshop | Contact us");
	});

	it('should display text "Your message has been sent." when user sends message  ', function () {
		insertDataAndSubmit();
		const newLocal = 'Your message has been sent.';
		var expectedElement = contactPage.findElementByText(newLocal, 'h3');
		contactPage.waitForElement(expectedElement);
		expect(expectedElement.getText()).toEqual(newLocal);

	});

});
function insertDataAndSubmit() {
	contactPage.inputName("Jarosław");
	contactPage.inputEmail("jaroslaw@testowy.pl");
	contactPage.inputMessage("please contact with me");
	contactPage.pushSubmit();
}

