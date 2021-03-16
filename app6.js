const fs = require('fs');



///////////////////////////////////////////////////////////////////////////////////////////////////
// IT IS BETTER TO USE STREAMS TO READ DATA BECAUSE OPERATING LARGE FILES WILL INTRODUCE LATENCY //
///////////////////////////////////////////////////////////////////////////////////////////////////







// read from text file as a stream
const readStream = fs.createReadStream(path='./example.txt', encoding='utf8');
const writeStream = fs.createWriteStream(path='./example2.txt', encoding='utf8');

// on data event
readStream.on('data', (chunk)=>{
// console.log(chunk);
writeStream.write(chunk);
});