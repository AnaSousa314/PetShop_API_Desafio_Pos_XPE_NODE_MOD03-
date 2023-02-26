import Animal from "../models/animais.model.js";
import Proprietario from "../models/proprietario.model.js";
import Servico from "../models/servicos.model.js";

async function insertService(service){
  try {
    return await Servico.create(service);
  } catch (err) {
    throw err;
  }
}

async function getServices() {
  try {
    return await Servico.findAll({
      include: [
        {
          model: Animal, include:[ Proprietario ]
        }
      ]
    });
  } catch (err) {
    throw err;
  }
}

export default {
  insertService,
  getServices
}