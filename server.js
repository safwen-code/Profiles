const express = require('express')
const connectDB = require('./config/connectDB')
const app = express()
const path = require('path')

const port = process.env.PORT || 5000
connectDB()

const User = require('./Router/user')
const Auth = require('./Router/auth')
const Profile = require('./Router/profile')

app.use('/user', User)
app.use('/auth', Auth)
app.use('/profile', Profile)

app.use(express.json({ extended: false }))
app.use('/images', express.static(path.join(__dirname, 'images')))

app.listen(port, () => {
  console.log(`server is work in port ${port}`)
})
