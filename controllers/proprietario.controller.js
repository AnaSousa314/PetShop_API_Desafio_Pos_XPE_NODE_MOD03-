import OwnerService from "../services/proprietario.service.js";

async function createOwner(req, res, next) {
    try {
      let owner = req.body;

      if (!owner.nome || !owner.telefone) {
        throw new Error("Nome e Telefone são obrigatórios.");
      }

      owner = await OwnerService.createOwner(owner);
      res.send(owner);
      logger.info(`POST /proprietario - ${JSON.stringify(owner)}`);
    } catch (err) {
      next(err)
    }
}

async function updateOwner(req, res, next) {
    try {
      let owner = req.body;

      if (!owner.proprietarioId || !owner.nome || !owner.telefone) {
        throw new Error("Proprietario ID, Nome e Telefone são obrigatórios.");
      }
      owner = await OwnerService.updateOwner(owner);
      res.send(owner);
      logger.info(`PUT /proprietario - ${JSON.stringify(owner)}`)
    } catch (err) {
      next(err);
    }
}

async function deleteOwner(req, res, next) {
    try {
      await OwnerService.deleteOwner(req.params.id);
      res.sendStatus(204);
      res.end();
      logger.info("DELETE /owner");
    } catch (err) {
      next(err);
    }
}

async function getOwners(req, res, next) {
  try {
    res.send(await OwnerService.getOwners());
    logger.info("GET /proprietario");
  } catch (err) {
    next(err);
  }
}

async function getOwner(req, res, next){
  try {
    res.send(await OwnerService.getOwner(req.params.id));
    logger.info("GET /proprietario/:id");
  } catch (err) {
    next(err)
  }
}

export default {
  createOwner,
  updateOwner,
  deleteOwner,
  getOwners,
  getOwner
}