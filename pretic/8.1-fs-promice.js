const fs = require('fs').promises

const start = async () => {
    try {
        const first = await fs.readFile("pretic/files/first.txt","utf-8");
        const second = await fs.readFile("pretic/files/second.txt","utf-8");
        const write = await fs.writeFile("pretic/files/node_native_promise.txt",`This is node native promise ${first} ${second}`,{flag:"as"});
        console.log(first,second,write);
        
    } catch (error) {
        console.log(error);
        
    }
    

}

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, "utf-8", (err, data) => {
//             if (err) {
//                 reject(err)

//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }

// const writeText = (first, second, path) => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(path,`The write file as promise:${first} ${second}`,{flag:"a"},(err) => {
//             if(err) {
//                 reject(err)
//             } else {
//                 resolve("Success");
//             }
//         })
//     })
// }

// const start = async () => {
//     try {
//         const first = await getText("pretic/files/first.txt");
//         const second = await getText("pretic/files/second.txt");
//         const resunt = await writeText(first,second,"pretic/files/result_async_await.txt")
//         console.log(first,second);
//     } catch (error) {
//         console.log(error);
//     }
    
    
// }
start();
// getText("../pretic/files/first.txt").then(result => console.log(result)).catch(error => console.log(error));



