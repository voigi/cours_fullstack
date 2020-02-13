var sequelize=require('sequelize');
var express = require('express');
var router = express.Router();


const country_controller = require('../controllers/country.controller');

router.get('/', country_controller.country_list);
router.get('/:id', country_controller.country_id);
router.post('/add', country_controller.country_add);

module.exports = router;
