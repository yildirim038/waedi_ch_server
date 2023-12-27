import * as directoryRepository from '../repository/DirectoryRepository.js';

export async function createDirectory(pDirectory) {
    return await directoryRepository.create(pDirectory);
}

export async function deleteDirectory(pId) {
    return await directoryRepository.remove(pId);
}

export async function getAllDirectory() {
    return await directoryRepository.getAll();
}

export async function getDirectoryById(pId) {
    let directory = await directoryRepository.findById(pId)
    return directory;
}

export async function updateDirectory(pId, pUpdateDirectory) {
    let directory = await directoryRepository.update(pId, pUpdateDirectory);
    return directory;
}
