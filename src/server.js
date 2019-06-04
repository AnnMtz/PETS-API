// dependecies
const express = require('express')
// app const/vars
const app = express()
const port = 8080

// express creating servers -> endpoint
app.get('/', (req, res) =>
  res.json({ message: 'Hola Mundo' })) // se utiliza para jalar un json

app.get('/hola', (req, res) =>
  res.json(
    {
      message: 'Hola Koders'
    })
)

module.exports = {
  server: app,
  port
}
