const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log('In add-product page');
    res.send('<form action="/product" method="POST">\
    <input type="text" name="title" id="">\
    <button type="submit">Add Product</button></form>'); // note that return statement is not used
});

// app.use('/product', (req, res, next) => {
router.post('/product', (req, res, next) => {
    const data = req.body
    console.log(data);
    res.redirect('/');
});

module.exports = router;