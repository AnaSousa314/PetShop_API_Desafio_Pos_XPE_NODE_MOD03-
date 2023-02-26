import Sequelize from "sequelize";
import db from "../config/pg/postgres.js";
import Animal from "./animais.model.js";

const Servico = db.define('servicos',
{
  servicoId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  descricao: {
    type: Sequelize.STRING,
    allowNull: false
  },

  valor: {
    type: Sequelize.DOUBLE,
    allowNull: false
  }
}, {underscored: true});

Servico.belongsTo(Animal, {foreignKey: "animalId"});

export default Servico;