# Jak to zrobić w JavaScript

Przykłady i ćwiczenia dla mini warsztatu testowania aplikacji z wykokrzystaniem JavaScript'u.

## Przygotowanie do warsztatów
1. Pobierz wymagane narzędzia
  * Zainstaluj przeglądarkę Chrome
  * Zainstaluj [Node.js](https://nodejs.org/) ( warsztat był tworzony i testowany dla wersji v6.9.5 )
  * Pobierz zawartość repozytorium. Jeśli korzystasz z narzędzia [Git](https://git-scm.com/downloads) sklonuj repozytorium, jeśli nie, naciśnij przycisk `Download ZIP` i rozpakuj pobrane archiwum.

2. Zainstaluj pakiety JavaScript

    `npm install`
    
3. Wystartuj testową aplikację  ( do większości ćwiczeń możesz też bez konieczności instalacji korzystać z aplikacji dostępnej na stronie http://jacekokrojek.github.io/jak-to-zrobic-w-js/ )

    `npm start`

4. Sprawdź poprawność instalacji startując w oddzielnym terminalu przykładowy test

    `protractor excercsises\1_introduction\conf.js`

5. Jeśli nie masz swojego ulubionego edytora JavaScript zainstaluj [Visual Studio Code](https://code.visualstudio.com/) lub [Atom](https://atom.io/)

**Uwaga:** W przypadku problemów w środowisku Windows zapoznaj się z postem [Nodejs cannot find installed module on Windows](http://stackoverflow.com/questions/9587665/nodejs-cannot-find-installed-module-on-windows/). Jeśli ciągle będziesz miał problem zgłoś go w zakładce `Issues`. Postaram się pomóc.

## Prezentacja
[Jak to zrobić w JavaScript](http://www.slideshare.net/jacekokrojek/aadays-2015-jak-to-zrobic-w-javascript)

## API

* GET /rest/prices/:code[?sortOrder=(asc|desc)] - pobieranie danych o cenach akcji (aktualnie baza zawiera dane tylko dla codu "fb"). 

  Przykład zapytania:

  `curl -H "Content-Type: application/json" http://localhost:3000/rest/prices/fb`

  Error messages: 
  
    Not supported stock code


* POST /rest/prices - dodawanie danych o cenach akcji. Dane należy przesłać w formacie { "code": <stock-code>, "date" : <data-in-format-YYYY-MM-DD>, "price" : <price> }. 

  Przykład zapytania

  `curl -d '{ "code": "fb", "date" : "2017-06-31", "price" : "20.00" }' -H "Content-Type: application/json" http://localhost:3000/rest/prices`

  Error messages: 
  
    Missing stock code
    Missing price date
    Not supported date format
    Missing stock price

## Dodatkowe informacje

Serwis wykorzystuje baze danych SQLite i zapisuje dane do pliku "app.sqlite3". Skrypt "fetch\_fb\_data.js" pozwala pobrac najnowsze dane o cenach akcji i zapisac je do bazy.

## Przydatne materiały
* Jeśli nie programowałeś do tej pory ten kurs powinien pomóc [Learn JavaScript](https://www.codecademy.com/tracks/javascript)
* [Mozilla JavaScript Guide - Re-introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
* [Mozilla JavaScript Guide - Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
* [Protractor - strona domowa](https://angular.github.io/protractor/#/)
* [Protractor API](https://angular.github.io/protractor/#/api)
* [Jasmine](http://jasmine.github.io/2.3/introduction.html)
* [Using the map() function to transform collections](https://www.youtube.com/watch?v=646Xw2qFqJU)
* [Using reduce() and reduceRight() functions](https://www.youtube.com/watch?v=CQdaGcxQhSE)
