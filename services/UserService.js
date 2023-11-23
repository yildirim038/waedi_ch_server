import * as userRepository from '../repository/UserRepository.js';

export async function createUser(pUser) {
    return await userRepository.create(pUser);
}

export async function deleteAdmin(pId) {
    return await userRepository.remove(pId);
}

export async function getAllAdmin() {
    return await userRepository.getAll();
}

export async function getAdminById(pId) {
    let user = await userRepository.findById(pId)
    return user;
}

export async function updateAdmin(pId, pUpdateUser) {
    let user = await userRepository.update(pId, pUpdateUser);
    return user;
}
