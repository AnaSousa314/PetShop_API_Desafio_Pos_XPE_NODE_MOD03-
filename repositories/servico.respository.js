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
      ],
      order: [
        ['servicoId','ASC' ]
      ]
    });
  } catch (err) {
    throw err;
  }
}

async function getServicesByOwner(ownerId) {
  try {
    return await Servico.findAll({
      include: [
        {
          model: Animal, include:[ Proprietario ], where: {proprietarioId: ownerId}
        }
      ]
    });
  } catch (err) {
    throw err;
  }
}



async function getService(servicoId) {
  try {
    return await Servico.findByPk(servicoId);
  } catch (err) {
    throw err;
  }
}

async function updateService(service) {
  try {
   await Servico.update(service, {
      where: {
        servicoId: service.servicoId
      }
    });
    return await getService(service.servicoId)
  } catch (err) {
    throw err;
  }
}

async function deleteService(id) {
  try {
    await Servico.destroy({
      where:{
        servicoId: id
      }
    })
  } catch (err) {
    throw err;
  }
}

export default {
  insertService,
  getServices,
  getServicesByOwner,
  getService,
  updateService,
  deleteService
}