//var homePage = require('./pages/home');
var contact = require('./pages/contact');

describe('Protractor Workshop app', function() {

	beforeEach(function () {
		contact.get();
	});

	it('should have "Get in touch" and "Address" sections on Contact Us page', function(){
		expect(contact.findInfo('Get in Touch') && contact.findInfo('Address')).toBe(true);
	});


});
