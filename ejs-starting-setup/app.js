const path = require('path');

const express = require('express');

const app = express();

// required for setting application behavior and additional custom settings
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);


app.use((req, res, next) => {
    res.status(404).render('404.ejs', { pageTitle: 'Page not found' });
});

app.listen(3000);
