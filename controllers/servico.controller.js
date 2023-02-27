import ServicoService from "../services/servico.service.js";

async function createService(req, res, next){
  try {
    let service = req.body;

    if(!service.descricao || !service.valor || !service.animalId) {
      throw new Error("Descricao, Valor e Animal ID");
    }

    service = await ServicoService.createService(service);
    res.send(service);
    logger.info(`POST /servico - ${JSON.stringify(service)}`);
  } catch (err) {
    next(err);
  }
}

async function getServices(req, res, next){
  try {
    res.send(await ServicoService.getServices(req.query.proprietarioId));
    logger.info("GET /servico");
  } catch (err) {
    next(err)
  }
}

async function getService(req, res, next){
  try {
    res.send(await ServicoService.getService(req.params.id));
    logger.info("GET /servico/:id");
  } catch (err) {
    next(err)
  }
}


async function updateService(req, res, next) {
  try {
    let service = req.body;

    if (!service.servicoId || !service.animalId || !service.descricao || !service.valor) {
      throw new Error("Service ID, Animal ID, Descricao e Valor são obrigatórios.");
    }
    service = await ServicoService.updateService(service);
    res.send(service);
    logger.info(`PUT /servico - ${JSON.stringify(service)}`)
  } catch (err) {
    next(err);
  }
}

async function deleteService(req, res, next) {
  try {
    await ServicoService.deleteService(req.params.id);
    res.sendStatus(204);
    res.end();
    logger.info("DELETE /servico/:id");
  } catch (err) {
    next(err)
  }
}

export default {
  createService,
  getServices,
  getService,
  updateService,
  deleteService
}