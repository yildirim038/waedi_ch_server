import db from "../models/SequelizeSetup.js"

export async function getAll() {
  return await db.directory.findAll();
}

export async function findById(pId) {
  return await db.directory.findByPk(pId)
}

export async function create(pDirectory) {
  return await db.directory.create(pDirectory);
}

export async function remove(pId) {
  return await db.directory.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pDirectory) {
  return await db.directory.update(pDirectory, {
    where: { id: pId }
  });
}
