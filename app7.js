const fs = require('fs');
const zlib = require('zlib');

///////////////////////////////////////////////////////COMPRESSION//////////////////////////////////////////////////////

// // compresses text data
// let gzip = zlib.createGzip();

// let readStream = fs.createReadStream(path = './example.txt', encoding = 'utf8');
// // const writeStream = fs.createWriteStream(path = './example2.txt', encoding = 'utf8');

// // for gzip compression, we need to specify the extension as follows
// let writeStream = fs.createWriteStream(path = './example2.txt.gz');


// // pipes data from readStream to writeStream
// readStream.pipe(gzip).pipe(writeStream);


///////////////////////////////////////////////////////DECOMPRESSION//////////////////////////////////////////////////////

// // NOTE: UNCOMMENT ONLY AFTER COMMENTING THE ABOVE CODE SNIPPET

// let gunzip = zlib.createGunzip();

// let readStream = fs.createReadStream(path = './example2.txt.gz');

// let writeStream = fs.createWriteStream(path = './uncompressed.txt', encoding = 'utf8');

// readStream.pipe(gunzip).pipe(writeStream);