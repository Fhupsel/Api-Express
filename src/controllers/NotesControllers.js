const knex = require("../database/knex")

class NotesControllers{
  async create(request, response){
    const {title, description, tags, links} = request.body
    const {user_id} = request.params

    const [note_id] = await knex("notes").insert({
      title,
      description,
      user_id
    })

    const linksInsert = links.map(link => {
      return{
        note_id,
        url: link
      }
    })
    await knex('links').insert(linksInsert)

    const tagsInsert = tags.map(name => {
      return{
        note_id,
        name,
        user_id
      }
    })
    await knex('tags').insert(tagsInsert)

    response.json()
  }

  async show(request, response){
    const {note_id} = request.params

    const note = await knex('notes').select()
    .where('id', note_id).first()  

    const tags = await knex('tags').where('note_id', note.id).orderBy('name')
    const links = await knex('links').where('note_id', note.id).orderBy('created_at')
    
    response.status(200).send({
      ...note,
      tags,
      links
    })
  }
}

module.exports = NotesControllers