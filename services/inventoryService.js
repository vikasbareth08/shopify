const { shopify, session } = require('../shopifyConfig');

exports.getInventoryItem = async(itemId) => {
    try{
        const inventoryitem = await shopify.rest.InventoryItem.find({
            session:session,
            id:itemId,
        });
        return inventoryitem
    } catch(err){
        throw Error('Failed to fetch inventory item')
    }
    
}
exports.getInventoryItemsById = async(params) => {
    try {
        const inventoryItems = await shopify.rest.InventoryItem.all({
            session: session,
            ids: params.ids,
          });
        return inventoryItems
    } catch (error) {
        throw Error('Failed to fetch inventory items')
    }
}