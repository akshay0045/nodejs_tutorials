const path = require('path')
console.log(path.sep);

//filepath
const filepath = path.join('/content','subfolder','text.txt');
console.log(filepath);

//basename
const base = path.basename(filepath);
console.log(base);

//absolute path

const absolute = path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute);

const checkAbsolute = path.isAbsolute(path.resolve(__dirname,"/content","subfolder","text.txt"))
console.log(checkAbsolute)