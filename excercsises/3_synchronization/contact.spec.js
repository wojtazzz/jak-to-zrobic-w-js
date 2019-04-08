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
		expect(contact.findInfo("Your message has been sent")).toBe(true);
		

	});

});
