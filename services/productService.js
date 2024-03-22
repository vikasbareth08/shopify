const { shopify, session } = require('../shopifyConfig');

exports.getProducts = async () => {
    const products = await shopify.rest.Product.all({
        session: session,
      })
    return products;
}

exports.getProductById = async (productId) => {
  const product = await shopify.rest.Product.find({
    session:session,
    id:productId
  })
  return product
}