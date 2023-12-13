import * as interviewRepository from '../repository/InterviewRepository.js';

export async function createInterview(pInterview) {
    return await interviewRepository.create(pInterview);
}

export async function deleteInterview(pId) {
    return await interviewRepository.remove(pId);
}

export async function getAllInterview() {
    return await interviewRepository.getAll();
}

export async function getInterviewById(pId) {
    let interview = await interviewRepository.findById(pId)
    return interview;
}

export async function updateInterview(pId, pUpdateInterview) {
    let interview = await interviewRepository.update(pId, pUpdateInterview);
    return interview;
}