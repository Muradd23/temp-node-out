const path = require('path');
const { text } = require('stream/consumers');

console.log(path.sep)
//complete path
const filePath = path.join('/content/','subfolder','test.txt');
console.log(filePath);
//see only the base path of the file
const base = path.basename(filePath);
console.log(base);
//returns an absolute path
const absolute = path.resolve(__dirname,'content','sunfolder','test.text');
console.log(absolute);