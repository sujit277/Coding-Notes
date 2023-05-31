/* Synchronus Operation - In synchronous operations tasks are performed one at a time and only when
 one is completed, the following is unblocked. In other words, you need to
 wait for a task to finish to move to the next one. */

/* Asynchronous Operation - In asynchronous operations, on the other hand, you can move to another 
task before the previous one finishes. This way, with asynchronous 
programming you’re able to deal with multiple requests simultaneously,
thus completing more tasks in a much shorter period of time.   
*/

//Synchronous Operations

const fs = require("fs");

//Creating a file and Writing into the file
/* fs.writeFileSync("read.txt","Welcome to Bangalore "); */

//Appending to a a file
/* fs.appendFileSync("read.txt","Can You Come On Coffee With Me"); */

//Reading File in Buffer format
/* const buffer = fs.readFileSync("read.txt");
console.log(buffer); */

/* Reading the Data In UTF Format
Node.js includes an Additional datatype called buffer
Buffer is mainly used to store binary data  */

/* const words = fs.readFileSync("read.txt","UTF-8");
console.log(words) */

//Renaming the File Name
/* fs.renameSync("read.txt","listen.txt"); */

//Deleting the file
/* fs.unlinkSync("read.txt"); */

//Asynchronous Operations

/* const fs = require("fs"); */

//Writing into the File
/* fs.writeFile("lit.txt","Good Morning ",(err)=>{
    console.log("Data Inserted");
    console.log(err); 
}); */

//Appending into the File
/* fs.appendFile("lit.txt","I Love To Watch Movie Today",(err)=>{
    console.log("Data Appended");
    console.log(err);
}); */

//Reading from the file
fs.readFile("lit.txt", "UTF-8", (err, data) => {
  console.log("Data Read SuccessFully");
  console.log(data);
  console.log(err);
});

//Renaming the File Name
fs.rename("read.txt", "listen.txt", (err) => {
  console.log("Error happened while renaming a File ");
});

//Deleting the file
fs.unlink("read.txt", (err) => {
  console.log("Error happened while deleting a File ");
});


