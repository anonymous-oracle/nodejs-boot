const express = require('express');

const express = require('express');

const router = express.Router();

app.use('/', (req, res, next) => {
    // console.log('In index page');
    res.send('<h1>Hello from Express.js</h1>'); // note that return statement is not used
});

module.exports = router;
