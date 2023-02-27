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

export default {
  createService,
  getServices
}