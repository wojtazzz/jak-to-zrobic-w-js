
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var sqlite3 = require('sqlite3').verbose();

app.use(express.static('docs'))

app.get('/rest/prices/fb', function (req, res, next) {

    var data = [];

    var db = new sqlite3.Database('app.sqlite3');

    db.serialize(function () {

        db.each("SELECT date, price FROM STOCK_PRICES order by date desc",
            function (err, row) {
                data.push({ x: row.date, y: row.price });
            }, function (err, count) {
                db.close();
                console.log(["data: ", data]);
                res.send(data);
            });

    });
})

app.use(bodyParser.json());

app.post('/rest/prices', function (request, response) {

    console.log("Saving data : " + request.body) // Show the HTML for the Google homepage.    

    var db = new sqlite3.Database('app.sqlite3');
    db.serialize(function () {
        var stmt = db.prepare("INSERT INTO STOCK_PRICES VALUES (?,?,?)");
        stmt.run(request.body.code, request.body.date, request.body.price);
        stmt.finalize();
    });

    db.close();

    response.send({ result: "OK" });    // echo the result back

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
