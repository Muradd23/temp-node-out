const name = 'macha';
//console.log(name); 


const names = require('./2-names');
const sayHi = require('./utils');
//console.log(names)
sayHi(names.john);
sayHi(names.peter);
const data = require('./alternative-export');
console.log(data);
require('./3-function');