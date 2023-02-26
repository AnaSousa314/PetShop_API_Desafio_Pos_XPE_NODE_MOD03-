import Proprietario from "../models/proprietario.model.js";

async function insertOwner(owner) {
  try {
    return await Proprietario.create(owner);
  } catch (err) {
    throw err;
  }
}

async function updateOwner(owner) {
  try {
    await Proprietario.update(owner, {
      where: {
        proprietarioId: owner.proprietarioId
      }
    });
    return await getOwner(owner.proprietarioId);
  } catch (err) {
    throw err;
  }
}

async function deleteOwner(id) {
  try {
    await Proprietario.destroy({
      where: {
        proprietarioId: id
      }
    });
  } catch (err) {
    throw err;
  }
}

async function getOwners() {
  try {
    return await Proprietario.findAll(); 
  } catch (err) {
    throw err;
  }
}

async function getOwner(id) {
  try {
    return await Proprietario.findByPk(id);
  } catch (err) {
    throw err;
  }
}



export default {
  getOwners,
  getOwner,
  insertOwner,
  updateOwner,
  deleteOwner
}