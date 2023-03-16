const db = require('../config/database')
const Perguntas = require('../model/pergunta.model')

exports.criarPergunta = async (req,res) => {
    const {titulo,descricao} = req.body
    Perguntas.create({
        titulo:titulo,
        descricao:descricao
    }).then(() => {
        res.status(201).redirect("/")
    })  
}

exports.listarPergunta = async (req,res) => {
    Perguntas.findAll({raw:true}).then(perguntas => {
        res.render("index", {
            perguntas:perguntas
        })
    })
   
}