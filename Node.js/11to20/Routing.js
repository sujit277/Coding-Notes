import http from "http";

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("<h1>Hello Friend Everthing is Okk</h1>");
    //res.send("<h1>Hello Friend Everthing is Okk</h1>");
  } else if (req.url == "/contact") {
    res.end("<h1>Hello Class Give Me Your Contacts</h1>");
    //res.send("<h1>Hello Class Give Me Your Contacts</h1>");
  } else {
    res.end("<h1>404 error The Page You Are Searching for is Not found</h1>");
    //res.send("<h1>404 error The Page You Are Searching for is Not found</h1>");
  }
});

server.listen(8000, () => {
  console.log("server is running on port Number 8000");
});
