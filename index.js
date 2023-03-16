const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get("/:nome/:lang", (req,res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var msg = "";
    res.render("index", {
        nome: nome,
        lang: lang,
        msg:msg
    })
})

app.listen(8080, () => {
    console.log("rodando na porta 8080")
})