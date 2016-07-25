describe('Agile & Automation Days homepage', function() {

	// beforeEach(function () {
	//
	// });

	xit('should have Agile & Automation Days | Konferencja i Warsztaty title', function(){
		browser.driver.get('http://aadays.pl/');
    var pageTitle = browser.driver.getTitle();
		expect(pageTitle).toEqual("Agile & Automation Days | Konferencja i Warsztaty");
	});

	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementFinder
	 * to see how to select element for verification
	 */
	it('should have Agenda section', function(){
		browser.driver.get('http://aadays.pl/');
		var agendaHeader = element(by.xpath('//h3[contains(text(),"Agenda")]'));
		expect(agendaHeader.isPresent()).toEqual(true);
	});

	xit('should change to "Strefa uczestnika" when user clicks "Rejestracja" button', function(){
	});

	xit('should have "Powered by 21CN" text in the copyright section', function(){
		var copyrightText = 'Powered by\n21CN';
	});

	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
	 * to see how map function can be used to verify content of multiple elements
	 */
	xit('should have footer with links to "O wydarzeniu", "Aktualności", "Cennik" and "Kontakt" pages',function(){
		var footer = element(by.css('ul.footer-menu')).all(by.tagName('a'));
	});

	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
	 * to see how fileter function can be used select elements based on condition
	 */
	xit('should have correct sections ...', function(){
		var headers = element.all(by.xpath('//h3'));
	});

});
