const { shopify, session } = require('../shopifyConfig');

exports.getOrders = async() => {
    const orders = await shopify.rest.Order.all({
        session: session,
      })

    return orders
}