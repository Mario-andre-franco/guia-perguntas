const Resposta = require('../model/resposta.model')


exports.perguntaRespondida = async (req,res) => {
    const {corpo,perguntaId} = req.body
    Resposta.create({
        corpo:corpo,
        perguntaId:perguntaId
    }).then(() => {
        res.status(201).redirect("/")
    })  
}