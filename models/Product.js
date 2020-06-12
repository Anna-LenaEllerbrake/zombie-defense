import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  description: { type: String },
  available: { type: Boolean },
})
module.exports = mongoose.model('testProduct', productSchema)
