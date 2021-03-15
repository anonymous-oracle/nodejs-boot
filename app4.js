const fs = require('fs');

// // create a file
// fs.writeFile('example.txt', "this is an example\n", (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('File created successfully');
//         // specifying the utf8 encoding will parse the binary data in the buffer into readable text when displayed
//         fs.readFile('example.txt', 'utf8', (err, file) => {
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 // file will contain binary buffer data
//                 console.log(file);
//             }
//         });
//     }
// });

// // renaming the file
// fs.rename('example.txt', 'example2.txt', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('Successfully renamed the file');
//     }
// })

// // append data to the file
// fs.appendFile('example2.txt', 'More data\n', (err)=>{
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('Successfully appended data to file');
//     }
// });

// // delete the file
// fs.unlink('example2.txt', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('Successfully deleted file');
//     }
// }); 