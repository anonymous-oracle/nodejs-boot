const http = require('http');
const fs = require('fs');

// // ONE METHOD OF CREATING A SERVER
// function reqListener(req, res) {

// }

// http.createServer(reqListener);

/////////////////////////////////////////////////////////////////////////

// http.createServer(function(req, res){

// });

/////////////////////////////////////////////////////////////////////////


const server = http.createServer((req, res) => {
    // console.log(req);
    // console.log(req.url, req.method, req.headers);
    // process.exit(); // stops the listening process

    // ROUTING REQUESTS
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>First Page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        // reading data streams using buffers
        const body = []; // cannot be reassigned to a different data; but can be modified

        req.on('data', (chunk) => {
            // console.log(`DATA CHUNK: ${chunk}`);
            body.push(chunk);
        });
        return req.on('end', () => { // by returning this here, we don't encounter any further errors as this if block will conclude
            // the event listener will register the callback in the event loop and will execute once the 'data' event listener callback finishes execution
            // basically how async code works


            // used to convert the received data stream to a parseable form
            const parsedBody = Buffer.concat(body).toString();
            // console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                // error handling incase there is an error
                // the following response will be sent when the file is completely written
                console.log(err);
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();

            }); // fs.writeFileSync will write to file in synchronous mode and will block the further execution of the code; hence it is better to use fs.writeFile for large files as it will be registered in the event loop

        });

    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>First Page</title></head>');
    res.write('<body><h1>Response</h1></body>')
    res.write('</html>');
    res.end();
});

server.listen(3000);