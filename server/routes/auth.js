const express = require('express');
const helper = require('../controllers/auth') 
const router = express.Router();

router.post('/register', helper.register);
router.post('/login', helper.login);
module.exports = router;