const { Router } = require('express')

const NotesControllers = require('../controllers/NotesControllers')

const notesRouters = Router()

const noteControllers = new NotesControllers()

notesRouters.post('/:user_id', noteControllers.create)
notesRouters.get('/:note_id', noteControllers.show)

module.exports = notesRouters