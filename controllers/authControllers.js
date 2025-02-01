// Methods to be executed on routes
const loginAuth = (req, res) => {
  console.log(req.body)
  res.send('Hello, This was a post Request')
}

const ragisterAuth = (req, res) => {
  res.send('Hello, This was a post Request')
}

// Export of all methods as object
module.exports = {
  loginAuth,
  ragisterAuth,
}
