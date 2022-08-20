import express from 'express'
import dotenv from 'dotenv' //When importing packages no file extension is needed
import connectDB from './config/db.js'
import products from './data/products.js' //When importing file the file type extension is needed

dotenv.config()
connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT || 5000
const ENVIRONMENT = process.env.NODE_ENV
app.listen(
  PORT,
  console.log(`Server running in ${ENVIRONMENT} mode on port ${PORT}`)
)
