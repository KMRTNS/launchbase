const express = require('express')
const routes = express.Router()
const instructors = require('./instructors')

// HTTP VERBS

// GET = MOSTRAR / RECEBER - RESOURCER
routes.get('/', function(req, res) {
  return res.redirect('instructors')
})

routes.get('/instructors', function(req, res) {
  return res.render('instructors/index')
})

routes.get('/instructors/create', function(req, res) {
  return res.render('instructors/create')
})

routes.get('/instructors/:id', instructors.show)

routes.get('/instructors/:id/edit', instructors.edit)

routes.get('/members', function(req, res) {
  return res.send('members')
})

// POST = CRIAR / SALVAR - RESOURCER COM DADOS ENVIADOS
routes.post('/instructors', instructors.post)

// PUT = EDITAR / ATUALIZAR - RESOURCER
routes.put('/instructors', instructors.put)

// DELETE = DELETAR - RESOURCER

module.exports = routes