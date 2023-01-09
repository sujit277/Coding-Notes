var path = require('path');

filePath = "C:\Users\Sujitkumar_Verma\Pictures\Screenshots\test.js";
newFilePath = path.join('Main', 'SubMain', 'Test.js');
console.log(newFilePath);
console.log("File Extension: " + path.extname(filePath));
console.log("Directory Name: " + path.dirname(filePath));