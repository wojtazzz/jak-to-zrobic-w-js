(function () {

  var fs = require('fs');

  var Screenshot = function (data, filename) {
    this.screenshotPath = browser.__scrDir + '/';
    var stream = fs.createWriteStream(this.screenshotPath + filename);

    stream.write(new Buffer(data, 'base64'));
    stream.end();
  };

  module.exports = Screenshot;

})();
