# Jak to zrobić w JavaScript

Przykłady i ćwiczenia prezentowane w ramach mini warsztatów na konferencji
Agile & Automation Days.

## Przygotowanie do warsztatów
1. Pobierz wymagane narzędzia
  * Zainstaluj przeglądarkę Chrome
  * Zainstaluj [Node.js](https://nodejs.org/)
  * Pobierz zawartość repozytorium. Jeśli korzystasz z narzędzia [Git](https://git-scm.com/downloads) sklonuj repozytorium, jeśli nie, naciśnij przycisk `Download ZIP` i rozpakuj pobrane archiwum.

  * Zainstaluj pozostałe pakiety

    `npm install`
    
  * Zainstaluj narzędzie protractor 

    `npm install -g protractor`
    
  * Zainstaluj narzędzie gulp 

    `npm install -g gulp`
    
  * Zaktualizuj drivery

    `webdriver-manager update`

2. Sprawdź poprawność instalacji  
  * Wystartuj testową aplikację
  
    `gulp webserver`
    
  * W oddzielnym terminalu wystartuj przykładowy test poleceniem

    `protractor excercsises\1_introduction\conf.js`
    
3. Jeśli nie masz swojego ulubionego edytora JavaScript zainstaluj [Atom](https://atom.io/)

**Uwaga:** W przypadku problemów w środowisku Windows zapoznaj się z postem [Nodejs cannot find installed module on Windows](http://stackoverflow.com/questions/9587665/nodejs-cannot-find-installed-module-on-windows/). Jeśli ciągle będziesz miał problem zgłoś go w zakładce `Issues`. Postaram się pomóc.

## Prezentacja
[Jak to zrobić w JavaScript](http://www.slideshare.net/jacekokrojek/aadays-2015-jak-to-zrobic-w-javascript)

## Przydatne materiały
* Jeśli nie programowałeś do tej pory ten kurs powinien pomóc [Learn JavaScript](https://www.codecademy.com/tracks/javascript)
* [Mozilla JavaScript Guide - Re-introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
* [Mozilla JavaScript Guide - Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
* [Protractor - strona domowa](https://angular.github.io/protractor/#/)
* [Protractor API](https://angular.github.io/protractor/#/api)
* [Jasmine](http://jasmine.github.io/2.3/introduction.html)
* [Using the map() function to transform collections](https://www.youtube.com/watch?v=646Xw2qFqJU)
* [Using reduce() and reduceRight() functions](https://www.youtube.com/watch?v=CQdaGcxQhSE)
