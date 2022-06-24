const express = require('express');

const router = express.Router();

const controllers = require('../controllers/index');

router.get('/', controllers.getUsers);
router.get('/:id', controllers.getUserById);

module.exports = router;
