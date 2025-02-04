const express = require('express')
const router = express.Router()

// Dashboard Route
router.get('/', (req, res) => {
  console.log('Dashboard Route GET Request')

  const user = req.user
  console.log('The authorized User: ', user)
  res.send('Welcome to Dashboard')
})

module.exports = router
