const express = require('express');
const router = express.Router();
const datesController = require('../controllers/datesController');

router.post('/', datesController.handleGetYears);

module.exports = router;