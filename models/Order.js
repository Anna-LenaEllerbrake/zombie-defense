import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  items: { type: Number },
  customer_id: { type: String },
  created_datetime: { type: Date },
  total_sum: { type: Number },
})
module.exports = mongoose.model('Order', orderSchema)
