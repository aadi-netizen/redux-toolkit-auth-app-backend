const fs = require('fs')

// Methods to be executed on routes
const loginAuth = (req, res) => {
  console.log(req.body)
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      const userArray = JSON.parse(data)
      const user = userArray.find((user) => user.email === req.body.email)
      if (user) {
        if (user.password === req.body.password) {
          res.send('User Logged in Successfully')
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
  console.log(req.body)
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
