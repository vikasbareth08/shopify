require('@shopify/shopify-api/adapters/node');
require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT | '3000'
const productRoutes = require('./routes/productRoutes')
const orderRoutes = require('./routes/orderRoutes')
const inventoryRoutes = require('./routes/inventoryRoutes')

//endpoints routes
app.use('/products',productRoutes)
app.use('/orders',orderRoutes)
app.use('/inventory',inventoryRoutes)

//middleware for handling errors
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({err});
  });

app.get('/',(req,res) => {
    res.send(`<h1>Server running on ${PORT}</h1>`)
})

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})