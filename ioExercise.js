var fs = require("fs");

var filePath = "/tmp/test_async.txt";

// Asynchronous - Opening File
console.log("Going to read file!");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
  var myArgs = process.argv.slice(2);
  console.log('myArgs:', myArgs);
});