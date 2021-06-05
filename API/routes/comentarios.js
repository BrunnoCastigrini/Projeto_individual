var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Publicacao = require('../models').Publicacao;
var Comentario = require ('../models').Comentario;

/* ROTA QUE RECUPERA CRIA UM COMENTÁRIO */
router.post('/:pubAtual/:idUsuario',function(req, res, next) {
    console.log("Iniciando publicação de comentário...")

	let idUsuario = req.params.idUsuario;
    let pubAtual = req.params.pubAtual;
    console.log(idUsuario, pubAtual)

    Comentario.create({
        descricao: req.body.descricao,
        fkPublicacao: pubAtual,
        fkUsuario: idUsuario
    }).then(resultado => {
        console.log("COMENTÁRIO CADASTRADO COM SUCESSO!");
        res.send(resultado);
    }).catch(erro => {
        console.log('DEU RUIM!')
        console.error(erro);
        res.status(500).send(erro.message);
    })
})

/* ROTA QUE RECUPERA TODOS OS COMENTÁRIOS */
router.get('/:tagAtual', function(req, res, next) {
    let tagAtual = req.params.tagAtual;
	console.log('Recuperando todos os comentários');
	
    let instrucaoSql = `SELECT
       usuario.nomeUsuario as autor,
       comentario.descricao,
       publicacao.idPublicacao
       FROM comentario
       JOIN usuario
       ON fkUsuario = idUsuario
       JOIN publicacao
       ON comentario.fkPublicacao = publicacao.idPublicacao
       WHERE publicacao.fkTag = ${tagAtual}
       ORDER BY comentario.idComentario ASC;`;

	sequelize.query(instrucaoSql, {
		model: Comentario,
		mapToModel: true 
	})
	.then(resultado => {
		console.log(`Comentários encontrados: ${resultado.length}`);
		res.json(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

module.exports = router;
