const http = require('http');
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//     console.log('In the middleware');
//     next(); // goes to the next middleware function for execution
// });

// // middlewares always meant to run always should be placed at the top and the next() method should be called inside without returning/sending a response
// app.use('/', (req, res, next) => {
//     console.log('In always running index page');
//     next();
// });


app.use('/add-product', (req, res, next) => {
    console.log('In add-product page');
    res.send('<form action="/product" method="POST">\
    <input type="text" name="title" id="">\
    <button type="submit">Add Product</button></form>'); // note that return statement is not used
});

app.use('/product', (req, res, next) => {
    const data = req.body
    console.log(data);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    // console.log('In index page');
    res.send('<h1>Hello from Express.js</h1>'); // note that return statement is not used
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);