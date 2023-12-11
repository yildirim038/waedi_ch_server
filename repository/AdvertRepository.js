import db from "../models/SequelizeSetup.js"

export async function getAll() {
  return await db.advert.findAll();
}

export async function findById(pId) {
  return await db.advert.findByPk(pId)
}

export async function create(pAdvert) {
  return await db.advert.create(pAdvert);
}

export async function remove(pId) {
  return await db.advert.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pAdvert) {
  return await db.advert.update(pAdvert, {
    where: { id: pId }
  });
}
