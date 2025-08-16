//__filename
//__dirname
// console.log(__dirname);
// console.log(__filename);

// console.log(__filename.split("/").pop());

// console.log(__dirname.split("/").pop());

// console.log(__filename.search("pretic"));

// console.log(__filename.length);

// console.log(__filename.lastIndexOf("/")+1);

// let pos = __filename.lastIndexOf("/")+1;

// console.log(`File name is: ${__filename.slice(pos)}`);

//1. get extention of file
// pos = __filename.lastIndexOf(".")+1
// let ext = __filename.slice(pos)
// console.log(ext);

//2. check current file name is test.js or not
// pos = __filename.lastIndexOf("/")+1;
// if(__filename.slice(pos) === "test.js") {
//     console.log("File name is same");
// } else {
//     console.log(`File is different current file name is ${__filename.slice(pos)}`);
// }

//3.get last folder of curent file
//Approach 1
// console.log(__dirname)
// let pos = __dirname.lastIndexOf("/")+1
// console.log(`The directory name of current file name is ${__dirname.slice(pos)}`)
// let items = __filename.split("/")
// items.pop()
// console.log(items.pop());

//Approach 2
// let pos1 = __filename.lastIndexOf("/")+1
// let path = __filename.slice(0,pos1-1);
// let pos2 = path.lastIndexOf("/")+1;

// console.log(`Derectory name is ${path.slice(pos2)}`);

//4. get file name without extention
// let filename = __filename;
// let pos = filename.lastIndexOf("/")+1
// filename = filename.slice(pos);
// console.log(filename.slice(0,filename.lastIndexOf(".")));

//5. wtite e function to check pretic word exist under __file name or not. if exist so output is "Inside project folder" other wise "Outside Project Folder"

function nameExist() {
    console.log(__filename);
    if(__filename.search("pretic") !== -1) {
        console.log("Inside Project folder");
        
    } else {
        console.log("Outside project folder");
        
    }
}
nameExist();

