import mongoose from 'mongoose'

const customerSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
})
module.exports = mongoose.model('Customer', customerSchema)
