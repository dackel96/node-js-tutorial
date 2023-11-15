//OS Module
const os = require('os');

//user info method.
const user = os.userInfo();

console.log(user);

//system uptime in seconds method.
console.log(`The System Uptime is ${os.uptime()} seconds!`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
