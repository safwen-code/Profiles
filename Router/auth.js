const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const config = require('config')
const bcrypt = require('bcryptjs')

const User = require('../Model/User')
const auth = require('../middelware/auth')

router.post('/login', async (req, res) => {
  const { password, email } = req.body
  try {
    let user = await User.findOne({ email })
    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'invalid credential user' }] })
    }
    // match the email and password
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'invalid credential password' }] })
    }
    // return jsonwebtoken JWT
    const payload = {
      user: {
        id: user.id,
        email: user.email,
      },
    }
    jwt.sign(
      payload,
      config.get('secret'),
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw err
        res.json({ token, email })
      },
    )
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Errors')
  }
})

router.get('/me', auth, async (req, res) => {
  try {
    const { id } = req.user
    let user = await User.findById(id).select('-password')
    res.status(200).json(user)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ msg: 'server error' })
  }
})
module.exports = router
