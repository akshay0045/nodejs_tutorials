const { log } = require("console");
const path = require("path");
const join= path.join("akshay", "kumar", "shah");
// console.log(join);

// const basename = path.basename("/tutorials/pretic/6.path.js")

// console.log(path.basename(join));

// console.log(basename);
// console.log(path.dirname("/tutorials/pretic/6.path.js"));

// let ext = path.extname("/tutorials/pretic/6.path.js")
// console.log(ext)

// console.log(path.parse("/tutorials/pretic/6.path.js").name)

//1. File Name Extractor
let name = path.parse("/home/user/docs/report.pdf").name
console.log(name);

//2. File Extension Finder

function extFinder(input) {
    console.log(path.extname(input));
    
}

extFinder("C:\\Users\\akshay\\music.mp3")

//3. Directory Path Extractor

function dirPathExtractor(input) {
    console.log(path.dirname(input));
    
}

dirPathExtractor("/var/www/html/index.html")

//4. Cross-Platform Path Join
 function crossPathJoin(...args) {
    console.log(path.join(...args))
 }
 crossPathJoin("users", "akshay", "photos");

// 5.Absolute Path Checkers
function checkAbsolutePath(input) {
    if(path.isAbsolute(input) === true) {
        console.log("Absolute");
    } else {
        console.log("Relative");
        
    }
}
checkAbsolutePath("/usr/local/bin");