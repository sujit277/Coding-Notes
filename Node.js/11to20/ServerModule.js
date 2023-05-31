/* The http.createServer() mmthods include request and response parameter
   which is the supplier
   The request object can be used to get the imformation about the current
   http request  
   e.g url , request header 

   the response object can be used to send a response for the current http request

   if the response from the http server is supposed to be displayed as html
   you should include an http server with the correct content type
*/

import http from "http";
const server = http.createServer((req, res) => {
  res.end("Hello Brother I am Damon");
});

server.listen(8000, () => {
  console.log("Listening on the port number 8000");
});


// import http from "http";

// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     res.end("<h1>Hello Friend Everthing is Okk</h1>");
//     //res.send("<h1>Hello Friend Everthing is Okk</h1>");
//   } else if (req.url == "/contact") {
//     res.end("<h1>Hello Class Give Me Your Contacts</h1>");
//     //res.send("<h1>Hello Class Give Me Your Contacts</h1>");
//   } else {
//     res.end("<h1>404 error The Page You Are Searching for is Not found</h1>");
//     //res.send("<h1>404 error The Page You Are Searching for is Not found</h1>");
//   }
// });

// server.listen(8000, () => {
//   console.log("server is running on port Number 8000");
// });

