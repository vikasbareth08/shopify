const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController')

//fetch single inventory item by id
router.get('/',inventoryController.getInventoryById)
router.get('/items',inventoryController.getInventoryItems)

module.exports = router