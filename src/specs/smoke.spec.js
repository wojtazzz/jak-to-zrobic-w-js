var homePage = require('../pages/home');
var registerPage = require('../pages/register');

describe('How to do it in JS applicarion', function() {

	beforeEach(function () {
		homePage.get();
	});

	it('should have correct link to Registration page', function(){
		homePage.clickRegisterButton();
		expect(registerPage.getTitle()).toEqual("Strefa uczestnika Agile & Automation Days 2016");

	});

	xit('should have correct link to Event page', function(){

	});

});
