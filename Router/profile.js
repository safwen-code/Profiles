const express = require('express')
const router = express.Router()
const Profile = require('../Model/Profile')
const User = require('../Model/User')

//post & edite profile
router.post('/addProfile', async (req, res) => {
  try {
    res.send('addprofile')
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ msg: 'server error' })
  }
})

//get current profile
//private
router.get('/me', async (req, res) => {
  try {
    res.send('my profile')
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ msg: 'server error' })
  }
})

//add exprience to profile
//private
router.put('/experience', async (req, res) => {
  try {
    res.send('add Experience')
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ msg: 'server error' })
  }
})

//delete experience / :id
//private
router.delete('/experience/:id', async (req, res) => {
  try {
    res.send('delete Experience')
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ msg: 'server error' })
  }
})

//add education
//private
router.put('/education', async (req, res) => {
  try {
    res.send('education')
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ msg: 'server error' })
  }
})

//delete education / :id
//private
router.delete('/education/:id', async (req, res) => {
  try {
    res.send('delete education')
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ msg: 'server error' })
  }
})

//delete profile
//private
router.delete('/', async (req, res) => {
  try {
    res.send('delete profile')
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ msg: 'server error' })
  }
})

//get all profile
//private
router.get('/', async (req, res) => {
  try {
    res.send('get all  profile')
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ msg: 'server error' })
  }
})

//get user profile by id
//private
router.get('/user/:user_id', async (req, res) => {
  try {
    res.send('user profile')
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ msg: 'server error' })
  }
})

module.exports = router
