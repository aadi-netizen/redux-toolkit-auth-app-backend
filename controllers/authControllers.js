const fs = require('fs')
const jwt = require('jsonwebtoken')

// Methods to be executed on routes
const loginAuth = (req, res) => {
  // console.log(req.body)
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      const userArray = JSON.parse(data)
      const user = userArray.find((user) => user.email === req.body.email)
      if (user) {
        if (user.password === req.body.password) {
          const token = jwt.sign(
            { email: user.email },
            process.env.ACCESS_TOKEN_SECRET
          )
          // console.log('Token: ', token)

          res.send({ token: token, email: user.email })
        } else {
          res.send('Password is Incorrect')
        }
      } else {
        res.send('User is not Ragistered')
      }
    }
  })
}

const ragisterAuth = (req, res) => {
  console.log('Ragistration Form data: ', req.body)
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      const userArray = JSON.parse(data)
      userArray.push(req.body)
      fs.writeFile('./data.json', JSON.stringify(userArray), (err) => {
        if (err) {
          console.log(err)
        } else {
          console.log('Data saved successfully')
        }
      })
      console.log(userArray)
    }
  })
  res.send('User has Ragistered Successfully')
}

// Export of all methods as object
module.exports = {
  loginAuth,
  ragisterAuth,
}
