import { Router } from 'express'
import { customerModel } from '../models'
import { minLength } from '../lib/validation'
import bodyParser from 'body-parser'

const customerRouter = Router()

customerRouter.use(bodyParser.json())

customerRouter.get('/', (request, response) => {
  customerModel.find().then((customers) => response.json(customers))
})

customerRouter.get('/:id', (request, response) => {
  customerModel
    .findById(request.params.id)
    .then((customer) => response.json(customer))
    .catch(response.status(404).end())
})

customerRouter.post('/', (request, response) => {
  response.set('Access-Control-Allow-Origin', '*')
  if (
    minLength(request.body.firstname, 1) &&
    minLength(request.body.email, 2)
  ) {
    customerModel
      .create(request.body)
      .then((customer) => response.json(customer))
  } else {
    response.status(400).end()
  }
})

customerRouter.put('/:id', (request, response) => {
  if (minLength(request.body.name, 5) && minLength(request.body.email, 5)) {
    customerModel
      .findByIdAndUpdate(request.params.id, request.body, { new: true })
      .then((customer) => response.json(customer))
      .catch(response.status(404).end())
  } else {
    response.status(400).end()
  }
})

customerRouter.delete('/:id', (request, response) => {
  customerModel
    .findByIdAndRemove(request.params.id, request.body)
    .then((customer) => response.json(customer))
    .catch((error) => console.log(error))
})

export default customerRouter
