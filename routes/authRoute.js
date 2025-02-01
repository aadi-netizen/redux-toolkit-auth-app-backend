// 3rd Party Modules
const { Router } = require('express')

// Local Modules
const { loginAuth, ragisterAuth } = require('../controllers/authControllers')

// Initialization
const router = Router()

// Login Request
router.post('/login', loginAuth)

// ragister Request
router.post('/ragister', ragisterAuth)

module.exports = router
