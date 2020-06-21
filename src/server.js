import bodyParser from 'body-parser'
import express from 'express'
import { PORT } from './config'
import customerRouter from './routes/customers'
import orderRouter from './routes/orders'
import productRouter from './routes/products'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/customers', customerRouter)
app.use('/products', productRouter)
app.use('/orders', orderRouter)
app.use(express.static('public'))

app.listen(PORT, console.log(`Server listening to http://localhost:${PORT}`))
