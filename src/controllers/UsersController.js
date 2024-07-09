///No máximo 5 métodos (index, show, create, update, delete)

class UsersController{
  create(req, res){
    const {name, email, password} = req.body
    res.status(201).json({name, email, password})
  }
}

module.exports = UsersController