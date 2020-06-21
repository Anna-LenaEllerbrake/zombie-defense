import mongoose from 'mongoose'

export const PORT = 2058
export const DATABASE = 'mongodb://localhost:27017/zombie-defense'
export const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () =>
  console.log('Mongoose running -> we are the best team evaaaaaa! <3')
)