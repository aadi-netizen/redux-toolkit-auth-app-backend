// 3rd Party Modules
const express = require('express')
const cors = require('cors')

// Local Modules
const authRouter = require('./routes/authRoute')

// Server Initialization
const app = express()

// Middlewares
app.use(express.json())
app.use(cors())

// Routes will be written here
app.use('/api/auth', authRouter)

// Server Listen Along with Database
app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
