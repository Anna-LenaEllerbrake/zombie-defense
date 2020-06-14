import mongoose from 'mongoose'

const customerSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String },
  email: { type: String },
})
module.exports = mongoose.model('Customer', customerSchema)
