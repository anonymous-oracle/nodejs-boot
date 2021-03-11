// import http from 'http'; // not supported
const http = require('http');

const server = http.createServer();



server.on('request', (req, res) => {
    console.log('Request received');
    // for (const key in req) {
    //     console.log(key);
    //     console.log('=====================================================================');
    // }
    if (req.url !== '/') {
        res.write(JSON.stringify({ 'MESSAGE': 'Not sure what you\'re looking for' }));
        return res.end();
    }
    res.write(JSON.stringify({ 'MESSAGE': 'Hello' }));
    return res.end();
});










server.listen(3000);