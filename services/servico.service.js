import ServicoRepository from "../repositories/servico.respository.js";

async function createService(service) {
  return await ServicoRepository.insertService(service)
}

async function getServices(ownerId) {
  if (ownerId) {
    return await ServicoRepository.getServicesByOwner(ownerId)
  }
  return await ServicoRepository.getServices();
}


async function getService(servicoId) {
  return await ServicoRepository.getService(servicoId);
} 

async function updateService(service) {
  return await ServicoRepository.updateService(service);
}

async function deleteService(id) {
  await ServicoRepository.deleteService(id);
}

export default {
  createService,
  getServices,
  getService,
  updateService,
  deleteService
}