var sequelize=require('sequelize');
var express = require('express');
var router = express.Router();



const type_controller = require('../controllers/type.controller');


router.get('/', type_controller.type_list);
router.get('/:id', type_controller.type_id);
router.post('/add', type_controller.type_add);
router.delete('/delete/:id',type_controller.type_del);
router.put('/update/:id',type_controller.type_maj);

module.exports = router;