import db from "../models/SequelizeSetup.js"

export async function getAll() {
  return await db.interview.findAll();
}

export async function findById(pId) {
  return await db.interview.findByPk(pId)
}

export async function create(pInterview) {
  return await db.interview.create(pInterview);
}

export async function remove(pId) {
  return await db.interview.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pInterview) {
  return await db.interview.update(pInterview, {
    where: { id: pId }
  });
}
