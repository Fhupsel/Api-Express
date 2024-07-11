const { Router } = require("express")

const UsersController = require("../controllers/UsersController")

const userRouters = Router()

function myMyddleware(request, response, next){
  console.log("Chegou no Middleware")
  // const senha = request.body.password
  // if(senha.length >= 8){
  //   console.log("Senha aprovada")
  //   next()
  // }
  if(!request.body.isAdmin){
    return response.json({message: "user unauthorized"})
  } 
  next()
}

const usersController = new UsersController()

///POST => Body params
userRouters.post("/", myMyddleware, usersController.create) 

///Exportando o arquivo
module.exports = userRouters