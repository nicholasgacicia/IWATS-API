const router = require('express').Router();
const authCtrl = require('../controllers/authController');

//** CURRENT PATH = '/api/auth'

router.post('/login', authCtrl.login);

module.exports = router;
