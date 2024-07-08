const express = require("express")

const app = express()

app.get("/message/:id/:user", (req, res) => {
  const {id, user} = req.params
  res.send(`Message ID: ${id}.
            To: ${user}.
    `)
})


app.get("/verification/:user/:age", (req, res) => {
  const {age, user} = req.params
  if(age >= 18){
    res.send(`${user} tem 18 anos ou mais e pode dirigir`)
  }
  else{
    res.send(`${user} tem menos de 18 anos e não pode dirigir`)
  }
})

const PORT = 3333

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})