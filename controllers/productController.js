const productService = require('../services/productService')

exports.getProducts = async(req,res,next) => {
    try {
        const response = await productService.getProducts();
        res.status(200).json(response)
    } catch (error) {
        next(error)
    }
}

exports.getProductById = async (req,res,next) => {
    try {
        const productId = req.params.id;
        const response = await productService.getProductById(productId);
        res.status(200).json(response)
    } catch (error) {
        next(error)
    }
}