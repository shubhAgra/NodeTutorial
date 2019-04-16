var fs = require('fs');

var stream;

stream = fs.createReadStream("demo.txt");

stream.on("data", function (data) {
    var chunk = data.toString();

    console.log(chunk);
})

stream = fs.createWriteStream("demo1.txt");

stream.write("New LIne");
stream.write("added new");

var readStream = fs.createReadStream("demo.txt");

var writeStream = fs.createWriteStream("demo2.txt");

readStream.pipe(writeStream);
