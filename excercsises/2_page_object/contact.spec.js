var ContactPage = require('./pages/contact');

describe('Protractor Workshop app', function () {

	beforeEach(function () {
		ContactPage.get();
	});

	it('should have "Get in touch" and "Address" sections on Contact Us page', function () {
		expect(ContactPage.getTitle()).toEqual("Protractor workshop | Contact us");

		var menuItems = element.all(by.xpath('//h3')).then(function (items) {
			expect(items[0].getText()).toBe("Get in Touch");
			expect(items[1].getText()).toBe("Address");
		});;

	});


});
