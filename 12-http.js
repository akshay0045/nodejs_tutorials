//http module is allow to set up a server 

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Hello wellcome to our home page")
    }
    else if (req.url === "/about") {
        res.end("Hello welcome to about page")
    }
    else {
        res.end(`<h1>OOps!!</h1> <p>somethigs wrong</p> <a href="/" >Go back</a>`)
    }
});

server.listen(5000);