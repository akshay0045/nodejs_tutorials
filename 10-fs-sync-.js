//Syncronise method
console.log("start");

const { readFileSync, writeFileSync } = require('fs');
const readFirstFile = readFileSync("./content/first.txt", 'utf8')
const readSecondFile = readFileSync("./content/second.txt", 'utf8');
console.log(readFirstFile, readSecondFile);

writeFileSync("./content/resunt-file.txt", ` The write file content hear ${readFirstFile} ${readSecondFile}`, { flag: "a" });
console.log("done with the task");
console.log("starting nextg task");




