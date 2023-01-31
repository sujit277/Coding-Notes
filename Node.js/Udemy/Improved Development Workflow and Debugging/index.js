const http = require('http');
const server = http.createServer((req, res) => {
    res.end('<h1 style="text-align:center;">Server Started</h1>')
})

server.listen(8080, () => {
    console.log("Server Started");
})