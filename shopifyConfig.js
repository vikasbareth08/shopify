require('dotenv').config();
const { restResources } = require('@shopify/shopify-api/rest/admin/2024-01');
const { shopifyApi, ApiVersion } = require('@shopify/shopify-api');

const shopify = new shopifyApi({
    apiKey: process.env.API_KEY,
    apiSecretKey: process.env.API_SECRET,
    scopes: process.env.SCOPES,
    hostName: process.env.HOST_NAME,
    apiVersion:ApiVersion.January24,
    restResources,
  })

const session = {
    shop:process.env.SHOP_NAME,
    accessToken:process.env.ACCESS_TOKEN,
}

module.exports = { shopify, session };
