const orderService = require('../services/orderService')
exports.getOrders = async(req,res,next) => {
    try {
        const response = await orderService.getOrders();
        res.status(200).json(response)
    } catch (error) {
        next(error)
    }
}