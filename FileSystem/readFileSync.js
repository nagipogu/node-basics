const fs = require('fs');

let data = fs.readFileSync('./data/hello_world.txt');

//this is executed before the file is read !!
console.log(data.toString());
