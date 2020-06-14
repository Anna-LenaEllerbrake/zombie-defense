import mongoose, { Schema } from 'mongoose'
import Item from './Item'
//import mongooseItem from './Item'
//const newDate = new Date().toDateString


const orderSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  items: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true, 
  },
  created_datetime: { type: Date, /*default: newDate*/ },
  total_sum: { type: Number},
})

module.exports = mongoose.model('Order', orderSchema)
