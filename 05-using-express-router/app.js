const express = require('express');
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({ extended: false }));

// the routes can be imported using the router class and can be passed to the app for use
app.use('/admin', adminRoutes);
app.use(shopRoutes);


// to handle any error requests for non-existant pages, we use a generic route
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


app.listen(3000);
