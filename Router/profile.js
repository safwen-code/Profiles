const express = require('express')
const router = express.Router()
const Profile = require('../Model/Profile')
const User = require('../Model/User')
const auth = require('../middelware/auth')
const multer = require('../middelware/multer-config')

//post & edite profile
router.post('/addProfile', multer, auth, async (req, res) => {
  const {
    company,
    website,
    bio,
    status,
    githubusername,
    skills,
    facebook,
    linkedin,
    imageUrl,
  } = req.body

  const Field = {}
  Field.user = req.user.id
  Field.imageUrl = `${req.protocol}://${req.get('host')}/images/${
    req.file.filename
  }`
  if (company) Field.company = company
  if (website) Field.website = website

  if (bio) Field.bio = bio
  if (status) Field.status = status
  if (githubusername) Field.githubusername = githubusername
  if (skills) {
    Field.skills = skills.split(',').map((skills) => skills.trim())
  }
  // build social object
  Field.social = {}
  if (facebook) Field.social.facebook = facebook
  if (linkedin) Field.social.linkedin = linkedin
  try {
    let profile = await Profile.findOne({ user: req.user.id })
    if (profile) {
      //update the profile
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: Field },
        { new: true },
      )
      return res.json(profile)
    }
    //create
    profile = new Profile(Field)
    await profile.save()
    res.json(profile)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('server error')
  }
})

//get current profile
//private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['name', 'email'])
    if (!profile) {
      return res.status(400).json({ msg: 'no profile for this fucking User' })
    }
    res.json(profile)
    console.log(profile)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('server in error')
  }
})

//add exprience to profile
//private
router.put('/experience', auth, async (req, res) => {
  const { titel, company, location, from, to, current, description } = req.body
  const newExp = { titel, company, location, from, to, current, description }
  try {
    const profile = await Profile.findOne({ user: req.user.id })
    profile.exprience.unshift(newExp)
    await profile.save()
    res.json(profile)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('server error')
  }
})

//delete experience / :id
//private
router.delete('/experience/:id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id })
    //get the rmove index
    const removeIndex = profile.exprience
      .map((item) => item.id)
      .indexOf(req.params.id)
    profile.exprience.splice(removeIndex, 1)
    await profile.save()
    res.json(profile)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('server error')
  }
})

//add education
//private
router.put('/education', auth, async (req, res) => {
  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description,
  } = req.body
  const Edu = { school, degree, fieldofstudy, from, to, current, description }
  try {
    const profile = await Profile.findOne({ user: req.user.id })
    profile.education.unshift(Edu)
    await profile.save()
    res.json(profile)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('server error')
  }
})

//delete education / :id
//private
router.delete('/education/:id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id })
    const removeIndex = profile.education
      .map((item) => item.id)
      .indexOf(req.params.id)
    profile.education.splice(removeIndex, 1)
    await profile.save()
    res.json(profile)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('server error')
  }
})

//delete profile
//private
router.delete('/', async (req, res) => {
  try {
    // for to do remove prst from user
    // await Post.deleteMany({user:req.user.id})

    // remove profile
    await Profile.findOneAndRemove({ user: req.user.id })
    // remove user
    await User.findOneAndRemove({ _id: req.user.id })
    res.json('user and his profile are deleted')
  } catch (err) {
    console.error(err.message)
    res.status(500).send('server error')
  }
})

//get all profile
//private
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'email'])
    res.json(profiles)
  } catch (err) {
    console.error(err.msg)
    res.status(500).send('server error')
  }
})

//get user profile by id
//private
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate('user', ['name', 'email'])
    if (!profile)
      return res.status(400).json({ msg: 'No profile for this user' })
    res.json(profile)
  } catch (err) {
    console.error(err.message)
    if (err.kind === 'ObjectId') {
      return res
        .status(400)
        .json({ msg: 'No profile for this user 3li krekeb' })
    }
    res.status(500).send('server error ')
  }
})

module.exports = router
