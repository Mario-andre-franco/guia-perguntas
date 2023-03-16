const db = require('../config/database')

exports.criarPergunta = async (req,res) => {
    const {titulo,descricao} = req.body
    const response = await db.query (
        'insert into perguntas (titulo,descricao) values ($1,$2)',
        [titulo,descricao]
    )

    res.status(201).render("sucesso")
}