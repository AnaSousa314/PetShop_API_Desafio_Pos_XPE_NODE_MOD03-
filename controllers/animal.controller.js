import AnimalService from "../services/animal.service.js";

async function createAnimal(req, res, next) {
  try {
    let animal = req.body;

    if (!animal.nome || !animal.tipo || !animal.proprietarioId) {
      throw new Error("Nome, Tipo e Proprietario ID são obrigatórios.");
    }

    animal = await AnimalService.createAnimal(animal);
    res.send(animal);
    logger.info(`POST /animal - ${JSON.stringify(animal)}`);
  } catch (err) {
    next(err)
  }
}

async function updateAnimal(req, res, next) {
  try {
    let animal = req.body;

    if (!animal.animalId || !animal.proprietarioId || !animal.nome || !animal.tipo) {
      throw new Error("Animal ID, Proprietario ID, Nome e Tipo são obrigatórios.");
    }
    animal = await AnimalService.updateAnimal(animal);
    res.send(animal);
    logger.info(`PUT /animal - ${JSON.stringify(animal)}`)
  } catch (err) {
    next(err);
  }
}

async function deleteAnimal(req, res, next) {
  try {
    await AnimalService.deleteAnimal(req.params.id);
    res.sendStatus(204);
    res.end();
    logger.info("DELETE /animal");
  } catch (err) {
    next(err);
  }
}

async function getAnimals(req, res, next) {
  try {
    res.send(await AnimalService.getAnimals(req.query.proprietarioId));
    logger.info("GET /animal");
  } catch (err) {
    next(err);
  }
}

async function getAnimal(req, res, next) {
  try {
    res.send(await AnimalService.getAnimal(req.params.id));
    logger.info("GET /animal/:id");
  } catch (err) {
    next(err);
  }
}



export default {
  createAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimals,
  getAnimal
}