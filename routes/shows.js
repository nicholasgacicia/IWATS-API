const router = require('express').Router();
const controllers = require('../controllers');


//** Current Path = 'api/shows'

//* Shows Routes
router.get('/', controllers.showsCtrl.index);  // ~Show Index (All)
router.get('/:id', controllers.showsCtrl.show);  // ~Show Get(One)
router.post('/', controllers.showsCtrl.create);  // ~Show Create (New)
router.put('/:id', controllers.showsCtrl.update); // ~Show Update (One)
router.delete('/:id', controllers.showsCtrl.destroy); // ~Show Delete (One)

module.exports = router;
