const express = require('express');
const router = express.Router();
// destinations controller
const destinationsCtrl = require('../controllers/destinations');

router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;
