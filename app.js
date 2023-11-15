// Modules

//CommonJS, every file is module (by default).
//Modules - Encapsulated Code (only share minimum).

const { john, peter } = require('../5-names');
const sayHi = require('../4-utiles');

sayHi('susan');
sayHi(john);
sayHi(peter);

//every file is a module and with export and require we can transfer data between them
