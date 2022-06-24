const express = require('express');

const router = express.Router();

const controllers = require('../controllers/index');

router.get('/products', controllers.getProducts);

module.exports = router;