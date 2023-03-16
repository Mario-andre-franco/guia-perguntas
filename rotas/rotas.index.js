const express = require('express')
const perguntasController = require('../controllers/perguntas.controller')
const app = express();

app.get("/", perguntasController.listarPergunta)

app.get("/perguntar",perguntasController.realizarPerguntas)

app.get("/pergunta/:id",perguntasController.listarPerguntaPorId)

app.post('/salvarpergunta',perguntasController.criarPergunta);


module.exports = app;