const express = require('express');
const router = express.Router();
const nodeController = require('../controllers/nodeController');

router.post('/add', nodeController.addNode);

module.exports = router;
