const { param } = require('../routes/inventoryRoutes');
const inventoryService = require('../services/inventoryService');

exports.getInventoryById = async(req,res,next) => {
    try {
        const itemId = req.query.id;
        const response = await inventoryService.getInventoryItem(itemId);
        res.status(200).json(response);
    } catch (error) {
        next(error)
    }
}   

exports.getInventoryItems = async(req,res,next) => {
    try {
        const ids = req.query.ids;
        // Check if IDs are provided
        if (!ids) {
          return res.status(400).json({ error: 'IDs parameter is required' });
        }
        // Prepare parameters object
        const idsArray = ids.split(',');
        const params = {
          ids: idsArray.join(',')
        };
        const response = await inventoryService.getInventoryItemsById(params)
        res.status(200).json(response)
    } catch (error) {
        next(error)
    }
}