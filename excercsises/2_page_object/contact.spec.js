var ContactPage = require('./pages/contact');

describe('Protractor Workshop app', function () {

	beforeEach(function () {
		ContactPage.get();
	});

	it('should have "Get in touch" and "Address" sections on Contact Us page', function () {
		expect(ContactPage.getTitle()).toEqual("Protractor workshop | Contact us");
		expect(ContactPage.compareSection("Get in Touch", "Address"));
	});


});
