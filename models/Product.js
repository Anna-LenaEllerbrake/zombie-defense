import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  description: { type: String },
  available: { type: Boolean },
})
module.exports = mongoose.model('Product', productSchema)
//export const mongooseProduct = mongoose.model('Product', productSchema)