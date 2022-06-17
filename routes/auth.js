const express = require('express');
const router = express();
const { signUp, signIn, logout } = require('../controllers/auth');

router.post('/register', signUp);
router.post('/login', signIn);
router.get('/logout', logout);

module.exports = router;
