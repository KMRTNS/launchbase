const express = require('express')
const routes = express.Router()

routes.get('/route', function(req, res) {
  return res.send('new route!')
})

module.exports = routes