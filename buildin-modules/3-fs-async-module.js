//FS Module
//const fs = require('fs');
const { readFileSync, writeFileSync } = require('fs');

//two parameters in ReadFile /path/encode/
const first = readFileSync('./path-folder/first.txt', 'utf-8');

const second = readFileSync('./path-folder/second.txt', 'utf-8');
console.log(first, second);

//create new files if does not exist if is existing file with that name will overwrite it.
//two parameters /path/content
writeFileSync(
  './path-folder/result-sync.txt',
  `Here is the result ${first},${second}`,
  //optional overwrite and create new value
  { flag: 'a' }
);
