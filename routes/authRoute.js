// 3rd Party Modules
const { Router } = require('express')

// Local Modules
const { loginAuth } = require('../controllers/authControllers')

// Initialization
const router = Router()

// Requests
router.post('/', loginAuth)

module.exports = router
