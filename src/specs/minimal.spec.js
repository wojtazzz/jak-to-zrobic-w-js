describe('Agile & Automation Days homepage', function() {

	// beforeEach(function () {
	//
	// });

	it('should have Agile & Automation Days | Konferencja i Warsztaty title', function(){
		browser.driver.get('http://aadays.pl/');
    var pageTitle = browser.driver.getTitle();
		expect(pageTitle).toEqual("Agile & Automation Days | Konferencja i Warsztaty");
	});

	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementFinder
	 * to see how to select element for verification
	 */
	xit('should have Agenda section', function(){
		var agendaHeader = element(by.xpath('//h3[contains(text(),"Agenda")]'));
		expect(agendaHeader.isPresent()).toEqual(true);
	});

	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
	 * to see how map function can be used to verify content of multiple elements
	 */
	xit('should have footer with correct elements',function(){
		var footer = element(by.css('ul.footer-menu')).all(by.css('li'));
	});

	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
	 * to see how fileter function can be used select elements based on condition
	 */
	xit('should have correct sections', function(){
		var headers = element.all(by.xpath('//h3'));
	});

});
