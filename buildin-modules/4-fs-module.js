//FS
const { readFile, writeFile } = require('fs');

//when is not async second parameter has to be callback function with two parameters error and result
readFile('./path-folder/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile('./path-folder/first.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      './path-folder/result-sync.txt',
      `Here is the result:${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
