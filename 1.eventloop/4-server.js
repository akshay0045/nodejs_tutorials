const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Server Created");
    res.end("Hello word");
})

server.listen(5000,() => {
    console.log("server listern 5000")
})