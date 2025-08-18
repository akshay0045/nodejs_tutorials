const fs =  require("fs");
const { first } = require("lodash");


fs.readFile("pretic/files/first.txt","utf-8",(err, result) => {
    if(err) {
        console.log(err);
        return
    } else {
        let first = result;
        console.log(first);
        fs.readFile("pretic/files/second.txt","utf-8",(err, result) => {
            if(err) {
                console.log(err);
                return;
            } else {
                let second = result
                console.log(second);
                fs.writeFile("pretic/files/result_async.txt", `This asyncronice Resunt is : ${first} ${second}`,(err) => {
                    if(err) {
                        console.log("error");
                    } else{
                        console.log("Success");
                        
                    }
                });
            }
        })
    }
})