const { query } = require('express')
const fs = require('fs')
const data = require('./data.json')
const { age, date } = require('./utils')

// HTTP VERBS

//GET - MOSTRAR
exports.show = function(req, res) {
  const { id } = req.params

  const foundInstructor = data.instructors.find(function(instructor){
    return instructor.id == id
  })

  if(!foundInstructor) {
    return res.send('Instructor not found!')
  }

  const instructor = {
    ...foundInstructor,
    age: age(foundInstructor.birth),
    services: foundInstructor.services.split(","),
    created_at: new Intl.DateTimeFormat('pt-BR').format(foundInstructor.created_at)
  }

  return res.render('instructors/show', { instructor })
}

//POST - CRIAR
exports.post = function(req, res) {
  const keys = Object.keys(req.body)
  for(key of keys) {
    if(req.body[key] == '') {
      return res.send('Please, fill all fields!')
    }
  }
  
  let {avatar_url, birth, gender, services, name} = req.body

  birth = Date.parse(req.body.birth)
  const created_at = Date.now()
  const id = Number(data.instructors.length + 1)

  data.instructors.push({
    id,
    avatar_url,
    name,
    birth, 
    gender, 
    services, 
    created_at
  })

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if(err) return res.send('Write file error!')
    return res.redirect('/instructors')
  })
}

//PUT - EDIT
exports.edit = function(req, res) {

  const { id } = req.params

  const foundInstructor = data.instructors.find(function(instructor){
    return instructor.id == id
  })

  if(!foundInstructor) {
    return res.send('Instructor not found!')
  }

  const instructor = {
    ...foundInstructor,
    birth: date(foundInstructor.birth)
  }

  return res.render('instructors/edit',  { instructor })
}

//PUT - ATUALIZAR
exports.put = function(req, res) {
  const { id } = req.body

  let index = 0

  const foundInstructor = data.instructors.find(function(instructor, foundIndex){
    if (instructor.id == id) {
      index = foundIndex
      return true
    }
  })

  if(!foundInstructor) {
    return res.send('Instructor not found!')
  }

  const instructor = {
    ...foundInstructor,
    ...req.body,
    birth: Date.parse(req.body.birth)
  }

  data.instructors[index] = instructor

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if(err) return res.send('Found error!')

    return res.redirect(`/instructors/${id}`)
  })
}