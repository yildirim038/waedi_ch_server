import * as eventRepository from '../repository/EventRepository.js';

export async function createEvent(pEvent) {
    return await eventRepository.create(pEvent);
}

export async function deleteAdmin(pId) {
    return await eventRepository.remove(pId);
}

export async function getAllEvent() {
    return await eventRepository.getAll();
}

export async function getEventById(pId) {
    let event = await eventRepository.findById(pId)
    return event;
}

export async function updateEvent(pId, pUpdateEvent) {
    let event = await eventRepository.update(pId, pUpdateEvent);
    return event;
}
