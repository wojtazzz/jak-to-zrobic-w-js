var homePage = require('./pages/home');
var contact = require('./pages/contact');

describe('Protractor Workshop app', function() {

	beforeEach(function () {
		homePage.get();
	});

	

	it('should have home page with title Protractor workshop | Home', function(){
		expect(homePage.getTitle()).toEqual("Protractor workshop | Home");
	});

	it('should have Contact menu item with link to Contact us page', function(){
		expect(homePage.getMenuTextAtIdx(4).getText()).toEqual("Contact");
		homePage.clickMenuAtIdx(4)
		expect(contact.getTitle()).toEqual("Protractor workshop | Contact us");
	});


});
