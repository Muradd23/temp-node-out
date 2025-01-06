const { Console } = require('console');
const {readFileSync,writeFileSync}=require('fs');
//read files
console.log('start');
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

console.log(first,second);
//write file
writeFileSync('./content/result.txt',
    `Here is the result: ${first}, ${second}`,
    {flag:'a'});
    console.log('done with this task');
    console.log('start another task');