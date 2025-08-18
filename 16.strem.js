const { error } = require('console');
const {createReadStream} = require('fs');

// const strem = createReadStream("big.txt",{highWaterMark:90000});
const strem = createReadStream("big.txt",{highWaterMark:90000,encoding:"utf-8"},);

strem.on('data',(result) => {
    console.log(result);
})

strem.on("error", (error) => {
    console.log(error);
    
})
