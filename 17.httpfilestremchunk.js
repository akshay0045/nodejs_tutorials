const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    // const text = fs.readFileSync("big.txt","utf-8");
    // res.end(text)

    const fileStrem = fs.createReadStream("big.txt","utf-8");

    fileStrem.on("open",(result) => {
        fileStrem.pipe(res)
    })

    fileStrem.on("error", (error) => {
       res.end(error)
        
    })
})

server.listen(5000)