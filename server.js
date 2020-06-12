import express from 'express'
import bodyParser from 'express'
import mongoose from 'mongoose'
import Product from './models/Product'
import Customer from './models/Customer'
import Order from './models/Order'

const PORT = 2058
const app = express()

app.use(bodyParser.json())
mongoose.connect('mongodb://localhost:27017/zombie-defense', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () =>
  console.log('Mongoose running -> we are the best team evaaaaaa! <3')
)

app.get('/marco', (request, response) => {
  response.send('polo')
})

app.listen(PORT, console.log(`Server listening to http://localhost:${PORT}`))
