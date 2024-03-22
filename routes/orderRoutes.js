const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController')

//fetch all orders
router.get('/',orderController.getOrders)

module.exports = router