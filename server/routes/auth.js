const express = require('express');
const helper = require('../controllers/auth') 
const router = express.Router();

router.post('/register', helper.register);

module.exports = router;