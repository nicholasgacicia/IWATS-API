const router = require('express').Router();
const authCtrl = require('../controllers/authController');
const auth = require('../middleware/auth');


//** CURRENT PATH = '/api/auth'

router.post('/login', authCtrl.login);
router.post('/verify', auth, authCtrl.verify);

module.exports = router;
