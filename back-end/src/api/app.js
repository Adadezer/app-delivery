const express = require('express');
const cors = require('cors');

const routes = require('../routes/routes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/login', routes.loginRouter);
app.use('/register', routes.registerRouter);
app.use('/customer', routes.customerRouter);
app.use('/images', express.static('public/images'));
app.use('/seller', routes.sellerRouter);
app.use('/users', routes.userRoutes);

module.exports = app;
