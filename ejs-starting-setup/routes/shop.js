const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js');
const adminData= require('./admin.js');

const router = express.Router();


router.get('/', (req, res, next) => {
  console.log(adminData.products); 
  res.render('shop.ejs', {prods: adminData.products,
    pageTitle: 'Shop',
    path: '/',
    productCSS: true});
});

module.exports = router;
