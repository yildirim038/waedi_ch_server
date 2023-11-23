import db from "../models/SequelizeSetup.js"

export async function getAll() {
  return await db.user.findAll();
}

export async function findById(pId) {
  return await db.user.findByPk(pId)
}

export async function create(pUser) {
  return await db.user.create(pUser);
}

export async function remove(pId) {
  return await db.user.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUser) {
  return await db.user.update(pUser, {
    where: { id: pId }
  });
}
