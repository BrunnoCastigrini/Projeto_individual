var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Publicacao = require('../models').Publicacao;
var env = process.env.NODE_ENV || 'development';


// Atualizando os dados do gráfico)
router.get('/grafico', function (req, res, next) {
	console.log(`Obtendo os dados das tags mais utilizadas...`);

	let instrucaoSql = ` SELECT
          (SELECT COUNT(fkTag) FROM publicacao WHERE fkTag = 1) as mu,
          (SELECT COUNT(fkTag) FROM publicacao WHERE fkTag = 2) as god,
          (SELECT COUNT(fkTag) FROM publicacao WHERE fkTag = 3) as hack;`;


	sequelize.query(instrucaoSql, { 
		model: Publicacao,
	    mapToModel: true 
	})
		.then(resultado => {
			res.json(resultado);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
});


module.exports = router;
