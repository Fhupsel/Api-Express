const knex = require("../database/knex")

class TagsController {

  async index(request, response){
    const {user_id} = request.params
    const tags = await knex('tags').where({user_id}).orderBy('name')
    response.status(200).json(tags)
  }
}

module.exports = TagsController