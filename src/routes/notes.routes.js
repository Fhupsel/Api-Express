const { Router } = require('express')

const NotesControllers = require('../controllers/NotesControllers')

const notesRouters = Router()

const noteControllers = new NotesControllers()

notesRouters.post('/:user_id', noteControllers.create)

module.exports = notesRouters