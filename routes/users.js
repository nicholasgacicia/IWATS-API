const router = require('express').Router();
const usersCtrl = require('../controllers/usersController');
const auth = require('../middleware/auth');


//** CURRENT PATH = '/api/users

router.post('/', usersCtrl.create);  // ~Create New User
router.post('/myshows', auth, usersCtrl.getMyShows);  // ~Get User data
router.put('/:showId', auth, usersCtrl.addAttendedShow); // ~Add to attended show array


module.exports = router;
