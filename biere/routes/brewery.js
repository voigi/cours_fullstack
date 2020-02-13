var sequelize=require('sequelize');
var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

const brewery_controller = require('../controllers/brewery.controller');

router.get('/', brewery_controller.brewery_list);
router.get('/:id', brewery_controller.brewery_id);
router.post('/add', brewery_controller.brewery_add);
router.delete('/delete/:id',brewery_controller.brewery_del);
router.put('/update/:id',brewery_controller.brewery_maj);

module.exports = router;
