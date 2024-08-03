const { Router } = require('express')

const NotesControllers = require('../controllers/NotesControllers')

const notesRouters = Router()

const noteControllers = new NotesControllers()

notesRouters.post('/:user_id', noteControllers.create)
notesRouters.get('/:note_id', noteControllers.show)
notesRouters.delete('/:note_id', noteControllers.delete)
notesRouters.get('/', noteControllers.index)

module.exports = notesRouters 