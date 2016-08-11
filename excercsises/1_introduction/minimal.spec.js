describe('Protractor workshop app', function() {

	// beforeEach(function () {
	//
	// });

	it('should have home page with title Protractor workshop | Home', function(){
		browser.driver.get('http://localhost:8888/index.html');
		var pageTitle = browser.driver.getTitle();
		expect(pageTitle).toEqual("Protractor workshop | Home");
	});

	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementFinder
	 * to see how to select element for verification
	 */
	it('should have footer with Copyright © 2013 Shapebootstrap | All Rights Reserved', function(){		
		var footerCopyright = element(by.css('footer .span6'));
		var expectedHTML = "Copyright © 2013 Shapebootstrap | All Rights Reserved"
		expect(footerCopyright.getText()).toContain(expectedHTML)
	});

	xit('should have "Example headline 1" carousel item after entering site', function(){	

	});

	xit('should have "Example headline 2" carousel item after clicking on next arrow', function(){
		
	});

	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
	 * to see how map function can be used to verify content of multiple elements
	 */
	xit('should have menu items with links to "Home", "About", "Services", "Blog", "Contact",  pages',function(){
		var menuItems = element.all(by.css('ul.nav > li > a'));
	});

	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
	 * to see how fileter function can be used select elements based on condition
	 */
	xit('should have Feature A, Feature B, Feature C sections ...', function(){
		var features = element.all(by.xpath('//h2'));
	});

});
