import mongoose, { Schema } from 'mongoose'
import mongooseProduct from './Product'

const itemSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: { type: Number, default: 1 },
  total_price: { type: Number, required: true },
})

module.exports = mongoose.model('Item', itemSchema)
//export const mongooseItem = mongoose.model('Item', itemSchema)