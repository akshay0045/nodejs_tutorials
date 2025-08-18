const fs = require('fs');
for (let i = 0; i < 100000; i++) {
    fs.writeFileSync("big.txt",`Hello Word ${i}\n`,{flag:"a"});

}