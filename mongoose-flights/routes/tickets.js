var express = require('express');
var router = express.Router();
var ticketController = require('../controllers/tickets'); 

router.get('/flights/:id/tickets/new', ticketController.new);
router.post('/', ticketController.create);

module.exports = router;