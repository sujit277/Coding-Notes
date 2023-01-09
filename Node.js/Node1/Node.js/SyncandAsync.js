var fs = require('fs');

//Asynchronous Reading
fs.readFile('Write.txt', "UTF-8", function (err, data) {
    if (err) {
        console.log("There is an Error reading the Data" + err);
    }
    else {
        console.log("Asynchronus Data read from the File is " + data);
    }
})

//Synchronous Reading
const data = fs.readFileSync('Write.txt', "UTF-8");
console.log("Synchronus Data read from the File is " + data)