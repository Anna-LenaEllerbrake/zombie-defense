import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  items: { type: Number },
  customer_id: { type: Number },
  created_datetime: { type: Date },
  total_sum: { type: Number },
})
module.exports = mongoose.model('Order', orderSchema)
