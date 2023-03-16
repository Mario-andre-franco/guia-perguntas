const express = require('express')
const perguntasController = require('../controllers/perguntas.controller')
const app = express();

app.get("/", (req,res) => {
    res.render("index")
})

app.get("/perguntar", (req,res) => {
    res.render("perguntar")
})

app.post('/salvarpergunta',perguntasController.criarPergunta);

module.exports = app;