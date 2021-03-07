const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(path.dirname(__dirname), 'views', 'shop.html'));
});

module.exports = router;
