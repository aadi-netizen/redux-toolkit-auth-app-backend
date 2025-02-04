// 3rd Party Modules
const express = require('express')
const cors = require('cors')

// Local Modules
const authRouter = require('./routes/authRoute')
const dashboardRouter = require('./routes/dashboardRoute')
const authorizeToken = require('./middlewares/authorize')

// dotenv configuration
require('dotenv').config()

// Server Initialization
const app = express()

// Middlewares
app.use(express.json())
app.use(cors())

// Routes will be written here
app.use('/api/auth', authRouter)
app.use('/api/dashboard', authorizeToken, dashboardRouter)

// Server Listen Along with Database
app.listen(process.env.PORT, () => {
  console.log('Server is running on port 3000')
})
