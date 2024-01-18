import db from "../models/SequelizeSetup.js"

export async function getAll() {
  return await db.photo.findAll();
}

export async function findById(pId) {
  return await db.photo.findByPk(pId)
}

export async function create(pPhoto) {
  return await db.photo.create(pPhoto);
}

export async function remove(pId) {
  return await db.photo.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pPhoto) {
  return await db.photo.update(pPhoto , {
    where: { id: pId }
  });
}
