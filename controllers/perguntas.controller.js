const Perguntas = require('../model/pergunta.model')
const Resposta = require('../model/resposta.model')

exports.criarPergunta = async (req,res) => {
    const {titulo,descricao} = req.body
    Perguntas.create({
        titulo:titulo,
        descricao:descricao
    }).then(() => {
        res.status(201).redirect("/")
    })  
}

exports.realizarPerguntas = async (req,res) => {
    res.render("perguntar")
}
exports.listarPergunta = async (req,res) => {
    Perguntas.findAll({raw:true, order: [
        ['id','DESC']
    ]}).then(perguntas => {
        res.render("index", {
            perguntas:perguntas
        })
    })
   
}

exports.listarPerguntaPorId = async (req,res) => {
    const id = req.params.id
    Perguntas.findOne({
        where: {id:id}
    }).then(pergunta => {
        if(pergunta != undefined) {

            Resposta.findAll({
                where: {perguntaId:pergunta.id},
                order: [ ['id','DESC'] ]
            }).then(respostas => {
                res.render("pergunta", {
                    pergunta: pergunta,
                    respostas: respostas
                })
            })

        } else {
            res.redirect("/")
        }
    })
}

exports.excluirPergunta = async (req,res) => {
    const id = req.params.id
    Perguntas.destroy({
        where: {id:id}
    }).then(res.redirect("/"))
}