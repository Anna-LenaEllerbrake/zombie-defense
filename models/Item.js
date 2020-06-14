import mongoose, { Schema } from 'mongoose'
import mongooseProduct from './Product'

const itemSchema = new mongoose.Schema({
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number },
  price: { type: Number },
})

module.exports = mongoose.model('Item', itemSchema)
//export const mongooseItem = mongoose.model('Item', itemSchema)