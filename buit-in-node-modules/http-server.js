// Create a Basic Server: Create an HTTP server. The server should respond with some text when accessed at the root URL (/).

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        const filePath = path.join(__dirname, 'public', 'index.html');
        fs.readFile(filePath, (err, data) => {
            if (err){
                res.end('Error loading index.html');
                return;
            }
            res.end(data);
        });
    }

    else if (req.url === '/about') {
        res.end('About Us');
    }
    else if (req.url === '/contact') {
        res.end('Contact Us');
    }
    else {
        res.end(`${'/'} Not Found`);
    }
})

const port = 5000;
server.listen(port, () => {
    console.log(`Server running at ${port}`);
});