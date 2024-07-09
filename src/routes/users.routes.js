const { Router } = require("express")

const UsersController = require("../controllers/UsersController")

const userRouters = Router()

const usersController = new UsersController()

///POST => Body params
userRouters.post("/", usersController.create) 

///Exportando o arquivo
module.exports = userRouters