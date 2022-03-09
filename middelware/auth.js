const config = require('config')
const jwt = require('jsonwebtoken')
function auth(req, res, next) {
  //get token from header
  const token = req.header('x-auth-token')
  //check for token
  if (!token)
    return res.status(401).json({ msg: 'no token authorization false' })
  try {
    //verify token
    const decode = jwt.verify(token, config.get('secret'))
    //add user from payload
    req.user = decode.user
    next()
  } catch (error) {
    res.status(400).json({ msg: 'token is not valid' })
  }
}
module.exports = auth
