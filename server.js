import express, { json } from 'express'
import bodyParser from 'express'
import mongoose from 'mongoose'
import Product from './models/Product'
import Customer from './models/Customer'
import Order from './models/Order'
import Item from './models/Item'

const PORT = 2058
const app = express()

app.use(bodyParser).json
mongoose.connect('mongodb://localhost:27017/zombie-defense', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () =>
  console.log('Mongoose running -> we are the best team evaaaaaa! <3')
)

app.get('/customer', (request, response) => {
  Customer.find({})
    .then((data) => response.json(data))
    .catch((error) => console.log(error))
})

app.post('/customer', (request, response) => {
  const newCustomer = request.body

  Customer.create(newCustomer)
    .then((data) => response.json(data))
    .catch((error) => console.log(error))
})

app.put('/customer/:id', (request, response) => {
  const id = request.params.id
  const updatedCustomer = request.body
  Customer.findByIdAndUpdate({ _id: id }, updatedCustomer, { new: true })
    .then((data) => response.json(data))
    .catch((error) => console.log(error))
})

app.delete('/customer/:id', (request, response) => {
  const id = request.params.id
  const updatedCustomer = request.body
  Customer.findByIdAndRemove({ _id: id })
    .then((data) => response.json(data))
    .catch((error) => console.log(error))
})

app.get('/order', (request, response) => {
  Order.find({})
    .then((data) => response.json(data))
    .catch((error) => console.log(error))
})

app.post('/order', (request, response) => {
  const order = new Order({
    _id: mongoose.Types.ObjectId(),
    items: request.body.ItemId,
    quantity: request.body.quantity,
    
  });
  order
  .save()
  .then(result => {
  console.log(result);
  response.status(201).json(result)
})
  
  .catch((error) => console.log(error))

})


app.get('/product', (request, response) => {
  Product.find({})
    .then((data) => response.json(data))
    .catch((error) => console.log(error))
})

app.listen(PORT, console.log(`Server listening to http://localhost:${PORT}`))
