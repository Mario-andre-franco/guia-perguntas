const express = require('express')
const app = express();

app.get("/", (req,res) => {
    res.render("index")
})

app.get("/perguntar", (req,res) => {
    res.render("perguntar")
})

app.post("/salvarpergunta", (req,res) => {
    res.send("formulario recebido")
})

module.exports = app;