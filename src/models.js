import mongoose, {Schema} from 'mongoose'
import {DATABASE} from './config'

mongoose.connect(DATABASE, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.set('debug', true);

export const productModel = mongoose.model('products', {
    name: String,
    price: Number,
    description: String,
    imageURL: String
})

export const customerModel = mongoose.model('customers', {
    name: String,
    email: String
})

export const orderModel = mongoose.model('orders', {
    items: [new Schema({
        product_id: {type: Schema.Types.ObjectId},
        quantity: Number,
        price: Number
    })],
    customer_id: Schema.Types.ObjectId,
    created_datetime: Date,
    total_sum: Number
})
