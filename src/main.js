var express = require('express')
var http = require('http')
var app = express()

app.get('/', (req, res) => {
  res.status(200).send("{'0':[{'nombre':'Juan Diaz Zapata', 'telefono':'5584895452', 'correo':'test@test.com', 'foto':'http://foto.jpg'}, {'nombre':'Carlos Menzoda Garcia', 'telefono':'5584895453', 'correo':'tes2@test.com', 'foto':'http://foto2.jpg'}, {'nombre':'Alina Santiago Ambrosio', 'telefono':'5584895454', 'correo':'test3@test.com', 'foto':'http://foto3.jpg'}, {'nombre':'Berenice Miranda Gomez', 'telefono':'5584895455', 'correo':'test5@test.com', 'foto':'http://foto5.jpg'}]}")
})

http.createServer(app).listen(8001, () => {
  console.log('Server started at http://localhost:8001');
});console.log('Hello World!');