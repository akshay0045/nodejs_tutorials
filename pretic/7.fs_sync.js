const fs =  require('fs')

let CheckExist = fs.existsSync("pretic/files/test.txt");
console.log(CheckExist);


let first = fs.readFileSync("pretic/files/first.txt","utf-8");
let second = fs.readFileSync("pretic/files/second.txt", "utf-8");

fs.writeFileSync("pretic/files/resultsync.txt", `This result of file ${first} ${second}`);

let resultsync = fs.readFileSync("pretic/files/resultsync.txt","utf-8")

console.log(first, second, resultsync);

let image  = fs.readFileSync("pretic/files/accountimage.png");

fs.writeFileSync("pretic/files/copy.png",image);

//Encode image
let image1 = fs.readFileSync("pretic/files/copy.png",{encoding:"base64"});
//Decode Buffer
let imageBuffer = Buffer.from(image1,"base64");
//Wrtite buffer in new buffer;
fs.writeFileSync("pretic/files/copy1.png", imageBuffer)