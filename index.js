const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const index = require('./rotas/rotas.index')
const perguntaModel = require('./model/pergunta.model')


app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.use(index)

app.listen(8080, () => {
    console.log("rodando na porta 8080")
})