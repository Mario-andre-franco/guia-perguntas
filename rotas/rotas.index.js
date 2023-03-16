const express = require('express')
const perguntasController = require('../controllers/perguntas.controller')
const app = express();

app.get("/", perguntasController.listarPergunta)

app.get("/perguntar", (req,res) => {
    res.render("perguntar")
})

app.post('/salvarpergunta',perguntasController.criarPergunta);

module.exports = app;