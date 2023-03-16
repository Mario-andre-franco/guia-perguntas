const express = require('express')
const app = express()
const index = require('./rotas/index')
const rotasPerguntas = require('./rotas/perguntas.rotas')


app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(index)

app.listen(8080, () => {
    console.log("rodando na porta 8080")
})