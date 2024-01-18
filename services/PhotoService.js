import * as photoRepository from '../repository/PhotoRepository.js';

export async function createPhoto(pPhoto) {
    return await photoRepository.create(pPhoto);
}

export async function deletePhotopId (pId) {
    return await photoRepository.remove(pId);
}

export async function getAllPhoto() {
    return await photoRepository.getAll();
}

export async function getPhotoById(pId) {
    let photo = await photoRepository.findById(pId)
    return photo;
}

export async function updatePhoto(pId, pUpdatePhoto) {
    let photo = await photoRepository.update(pId, pUpdatePhoto);
    return photo;
}