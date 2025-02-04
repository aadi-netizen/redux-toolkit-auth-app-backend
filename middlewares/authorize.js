require('dotenv').config()
const jwt = require('jsonwebtoken')

const authorizeToken = (req, res, next) => {
  const token = req.headers['authorization'].split(' ')[1]
  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        res.send('Token is Invalid')
      } else {
        req.user = user
        next()
      }
    })
  } else {
    res.send('Token is Required')
  }
  next()
}

module.exports = authorizeToken
