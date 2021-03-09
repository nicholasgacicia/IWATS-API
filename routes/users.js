const router = require('express').Router();
const usersCtrl = require('../controllers/usersController');
const auth = require('../middleware/auth');


//** CURRENT PATH = '/api/users

router.post('/', usersCtrl.create);
router.post('/myshows', auth, usersCtrl.getMyShows);

module.exports = router;
