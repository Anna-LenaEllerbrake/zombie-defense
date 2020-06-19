import express from 'express'
import bodyParser from 'body-parser'
import { PORT } from './config'
import customerRouter from './routes/customers'
import productRouter from './routes/products'
import orderRouter from './routes/orders'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/customers', customerRouter)
app.use('/products', productRouter)
app.use('/orders', orderRouter)

app.listen(PORT, console.log(`Server listening to http://localhost:${PORT}`))
