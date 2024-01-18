import * as photoGalleryRepository from '../repository/PhotoGalleryRepository.js';

export async function createPhotoGallery(pPhotoGallery) {
    return await photoGalleryRepository.create(pPhotoGallery);
}

export async function deletePhotoGallery(pId) {
    return await photoGalleryRepository.remove(pId);
}

export async function getAllPhotoGallery() {
    return await photoGalleryRepository.getAll();
}

export async function getPhotoGalleryById(pId) {
    let photoGallery = await photoGalleryRepository.findById(pId)
    return photoGallery;
}

export async function updatePhotoGallery(pId, pUpdatePhotoGallery) {
    let photoGallery = await photoGalleryRepository.update(pId, pUpdatePhotoGallery);
    return photoGallery;
}