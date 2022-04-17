const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server,
  autoescape: false
})

server.get('/', function(req, res) {
  const about = {
    avatar_url: "https://avatars.githubusercontent.com/u/102094427?v=4",
    name: "Igor Martins",
    role: "Estudante de Programação",
    description: 'Estudante - Focado em aprender programação na <a href="https://app.rocketseat.com.br" target="_blank">Rocketseat</a>',
    links: [
      {url: "/", name: "GitHub"},
      {url: "/", name: "Twitter"},
      {url: "/", name: "LinkedIn"}
    ]
  }
  return res.render('about', { about })
})

server.get('/portfolio', function(req, res) {
  return res.render('portfolio', { items: videos })
})

server.listen(5000, function() {
  console.log('server is runnig!')
})