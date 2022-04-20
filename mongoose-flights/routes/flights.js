var express = require('express');
var router = express.Router();
var flightController = require('../controllers/flights'); 

router.get('/', flightController.index);
router.get('/new', flightController.new);
router.post('/', flightController.create);
router.get('/:id', flightController.show);
router.post('/:id', flightController.show);

module.exports = router;
