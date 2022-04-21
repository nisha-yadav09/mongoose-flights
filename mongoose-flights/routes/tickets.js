var express = require('express');
var router = express.Router();
var ticketController = require('../controllers/tickets'); 

router.get('/flights/:id/tickets/new', ticketController.new);
router.post('/flights/:id/tickets', ticketController.create); 
router.delete('/tickets/:id', ticketController.delete);

module.exports = router;