const Resposta = require('../model/resposta.model')


exports.perguntaRespondida = async (req,res) => {
    const {corpo,perguntaId} = req.body
    console.log(perguntaId);
    Resposta.create({
        corpo:corpo,
        perguntaId:perguntaId
    }).then(() => {
        res.redirect("/")
    })  
}