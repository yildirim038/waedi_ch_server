import * as advertRepository from '../repository/AdvertRepository.js';

export async function createAdvert(pAdvert) {
    return await advertRepository.create(pAdvert);
}

export async function deleteAdvert(pId) {
    return await advertRepository.remove(pId);
}

export async function getAllAdvert() {
    return await advertRepository.getAll();
}

export async function getAdvertById(pId) {
    let advert = await advertRepository.findById(pId)
    return advert;
}

export async function updateAdvert(pId, pUpdatepAdvert) {
    let advert = await advertRepository.update(pId, pUpdatepAdvert);
    return advert;
}
