const express = require('express')
const connectDB = require('./config/connectDB')

const app = express()
const port = process.env.PORT || 5000
connectDB()
app.use(express.json({ extended: false }))

const User = require('./Router/user')
const Auth = require('./Router/auth')
const Profile = require('./Router/profile')
app.use('/user', User)
app.use('/auth', Auth)
app.use('/profile', Profile)

app.listen(port, () => {
  console.log(`server is work in port ${port}`)
})
