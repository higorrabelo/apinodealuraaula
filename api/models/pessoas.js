'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //relacionamentos entre tabelas antes de fazer s migrations
      Pessoas.hasMany(models.Turmas,{
        foreignKey:'docente_id'
      });
      Pessoas.hasMany(models.Matriculas,{
        forreignKey:'estudante_id'
      })//cria nomes com o nome da tabelaseguido de id
    }
    //lembrar sempre de na criação dos modelos criar ele somente com os dados que não dependem de outras tabelas
  }
  Pessoas.init({
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
  });
  return Pessoas;
};