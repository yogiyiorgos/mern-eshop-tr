import express from 'express'
import dotenv from 'dotenv' //When importing packages no file extension is needed
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()
connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api/products', productRoutes)

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
const ENVIRONMENT = process.env.NODE_ENV
app.listen(
  PORT,
  console.log(`Server running in ${ENVIRONMENT} mode on port ${PORT}`)
)
