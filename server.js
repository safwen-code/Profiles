const express = require('express')
const connectDB = require('./config/connectDB')

const app = express()

const port = process.env.PORT || 5000
connectDB()
app.listen(port, () => {
  console.log(`server is work in port ${port}`)
})
