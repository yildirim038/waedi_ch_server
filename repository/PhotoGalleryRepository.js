import db from "../models/SequelizeSetup.js"

export async function getAll() {
  return await db.photoGallery.findAll();
}

export async function findById(pId) {
  return await db.photoGallery.findByPk(pId)
}

export async function create(pPhotoGallery) {
  return await db.photoGallery.create(pPhotoGallery);
}

export async function remove(pId) {
  return await db.photoGallery.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pPhotoGallery) {
  return await db.photoGallery.update(pPhotoGallery, {
    where: { id: pId }
  });
}
