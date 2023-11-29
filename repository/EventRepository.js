import db from "../models/SequelizeSetup.js"

export async function getAll() {
  return await db.event.findAll();
}

export async function findById(pId) {
  return await db.event.findByPk(pId)
}

export async function create(pEvent) {
  return await db.event.create(pEvent);
}

export async function remove(pId) {
  return await db.event.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pEvent) {
  return await db.event.update(pEvent, {
    where: { id: pId }
  });
}
