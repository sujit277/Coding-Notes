import http from "http";
const server = http.createServer((req,res)=>{
    console.log("Server is Created");
    if(req.url=="/"){
        res.end("Hello Friend Everthing is Okk");
    }
    else if(req.url=="/contact"){
        res.end("Hello Class Give Me Your Contacts");
    }
    else{
        res.writeHead(404);
        res.end("<h1>404 error The Page You Are Searching for is Not found</h1>");
    }

});

server.listen(8080,()=>{
    console.log("server is running on port Number 8080");

});