import AnimalRepository from "../repositories/animal.repository.js";

async function createAnimal(animal) {
  return await AnimalRepository.insertAnimal(animal);
}

async function updateAnimal(animal) {
  return await AnimalRepository.updateAnimal(animal);
}

async function deleteAnimal(id) {
  await AnimalRepository.deleteAnimal(id);
}

async function getAnimals(proprietarioId) {
  if (proprietarioId) {
    return await AnimalRepository.getAnimalsByOwnerID(proprietarioId)
  }
  return await AnimalRepository.getAnimals();
}

async function getAnimal(id) {
  return await AnimalRepository.getAnimal(id);
}


export default {
  createAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimals,
  getAnimal
}