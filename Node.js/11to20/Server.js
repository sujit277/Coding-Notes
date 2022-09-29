/* The http.createServer() mmthods include request and response parameter
   which is the supplier
   The request object can be used to get the imformation about the current
   http request  
   e.g url , request header, data 

   the response object can be used to send a response for the current http request

   if the response from the http server is supposed to be displayed as html
   you should include an http server with the correct content type
*/
import http from "http";
const server = http.createServer((req,res)=>{
    res.end("Hello Brother I am Damon");
});

server.listen(8000,()=>{
    console.log("Listening on the port number 8000");
});