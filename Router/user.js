const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')

const User = require('../Model/User')

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body

  try {
    let user = await User.findOne({ email })
    if (user) {
      res.status(400).json({ msg: `${email} is all ready exist` })
    }
    user = new User({
      name,
      email,
      password,
    })
    //encrypt password
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)
    await user.save()
    //return jwt
    const payload = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    }
    jwt.sign(
      payload,
      config.get('secret'),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err
        res.json({ token, name, email })
      },
    )
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ msg: 'server error' })
  }
})

module.exports = router
