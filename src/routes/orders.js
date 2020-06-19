import Router from 'express'
import {orderModel, productModel, customerModel} from "../models";
import {minLength} from "../lib/validation";

const orderRouter = Router()

orderRouter.get('/', (request, response) => {
    orderModel.find().then(orders => response.json(orders))
})

orderRouter.get('/:id', (request, response) => {
    orderModel.findById(request.params.id)
        .then(order => response.json(order))
        .catch(() => response.status(404).end())
})

orderRouter.post('/', (request, response) => {
    if (minLength(request.body.customer_id, 5)) {
        productModel.find({'_id': { $in: request.body.items.map(item => item.product_id)}})
            .then(products => {
                if (products.length !== request.body.items.length) {
                    throw new Error('Not all products are available');
                }

                // add prices to items
                request.body.items = request.body.items.map(item => {
                    item.price = products.find(product => String(product._id) === item.product_id).price
                    return item
                })

                return customerModel.findById(request.body.customer_id)
            })
            .then(customer => {
                request.body.created_datetime = new Date()
                request.body.total_sum = request.body.items.reduce((prev, current) => {
                    return prev.quantity * prev.price + current.quantity * current.price
                })

                console.log(request.body)
                return orderModel.create(request.body)
            })
            .then(order => response.json(order))
            .catch((message) => response.status(400).end(message))

    } else {
        return response.status(400).end()
    }
})

export default orderRouter
