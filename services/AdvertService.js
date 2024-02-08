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
    let event = await advertRepository.findById(pId)
    return event;
}

export async function updateAdvert(pId, pUpdateEvent) {
    let event = await advertRepository.update(pId, pUpdateEvent);
    return event;
}
