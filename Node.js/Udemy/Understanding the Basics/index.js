const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1 style="text-align:center">Sujit Kumar Verma</h1>');
        res.write('<h1 style="text-align:center">Epam Systems</h1>');
        res.write('<div style="text-align:center"><form action="/message"><input type="text" name="message"/><button type="submit">Submit</button></form></div>')
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'Sujit Kumar Verma Works in Epam Systems');
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="text-align:center">Software Engineer</h1>');
    res.end('<h1 style="text-align:center">12.5 LPA</h1>');

})

server.listen(8080, () => {
    console.log("Server Started at 8080");
});