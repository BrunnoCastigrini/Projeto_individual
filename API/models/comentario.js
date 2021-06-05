'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Comentario = sequelize.define('Comentario',{	
		idComentario: {
			field: 'idComentario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
        descricao: {
            field: 'descricao',
            type: DataTypes.STRING,
            allowNull: false
        },
        fkPublicacao: {
            field: 'fkPublicacao',
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fkUsuario: {
            field: 'fkUsuario',
            type: DataTypes.INTEGER,
            allowNull: false
        }
	}, 
	{
		tableName: 'comentario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

	return Comentario;
};
