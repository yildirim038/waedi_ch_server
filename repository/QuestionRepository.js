import db from "../models/SequelizeSetup.js"

export async function getAll() {
  return await db.question.findAll();
}

export async function findById(pId) {
  return await db.question.findByPk(pId)
}

export async function create(pQuestion) {
  return await db.question.create(pQuestion);
}

export async function remove(pId) {
  return await db.question.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pQuestion) {
  return await db.question.update(pQuestion, {
    where: { id: pId }
  });
}
