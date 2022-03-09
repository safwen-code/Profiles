const mongoose = require('mongoose')
const detail = require('./default.json')
const connectDB = async () => {
  try {
    const db = await mongoose.connect(detail.mogoUri)
    console.log('db is connect')
  } catch (error) {
    console.error(error.message)
    console.log('problem with mongoose')
  }
}
module.exports = connectDB
