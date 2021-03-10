// // writing to stdout
// process.stdout.write(Math.random().toString()+'\n');
// console.log(process);
// console.dir(process, {depth: 0});
// console.log(process.mainModule.paths);

// // // functions
// function x() {
//     console.log(arguments);
// }
// x(1, 7, 'hello');

// // now if we console log the arguments in the global scope we get some more arguments
// console.log(arguments);

// // EVERYTHING WE SCRIPT IN NODE IN THE GLOBAL SCOPE IS ACTUALLY WRAPPED INSIDE ANOTHER IMMEDIATELY INVOKED FUNCTION EXPRESSION AND IS IDENTIFIED BY AS THE WRAPPER

// // THE FUNCTION ARGUMENTS ARE AS FOLLOWS
// console.log(require('module').wrapper);

// ////////////////////////////////////////////////////////////////////////
// // [ '(function (exports, require, module, __filename, __dirname) { ',
// //   '\n});' ]
// ////////////////////////////////////////////////////////////////////////


// // CALLING REQUIRE MULTIPLE TIMES OVER A PACKAGE WILL JUST RETRIEVE THE PACKAGE FROM THE CACHE WHICH IS FORMED ON THE FIRST REQUIRE

// const ind2 = require('./index2.js');
// console.log(ind2.answer, ind2.answer2);

// // HERE IS AN EXAMPLE OF HOW MULTIPLE REQUIRES CAN BE USED
// require('./index3.js').f1();
// require('./index3.js').f1(); 
// require('./index3.js').f1();

// // IMPORT AND EXPORT (not supported yet)
// // in the package.json file, the "type" field is set to "module" so that the files are used as modules
// import m from './index3.js';

// m.f1();
// m.f1();
// m.f1();

