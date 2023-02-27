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
    logger.info("GET /servicos");
  } catch (err) {
    next(err)
  }
}

export default {
  createService,
  getServices
}