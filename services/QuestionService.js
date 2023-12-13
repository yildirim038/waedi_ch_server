import * as questionRepository from '../repository/QuestionRepository.js';

export async function createQuestion(pQuestion) {
    return await questionRepository.create(pQuestion);
}

export async function deleteQuestion(pId) {
    return await questionRepository.remove(pId);
}

export async function getAllQuestion() {
    return await questionRepository.getAll();
}

export async function getQuestionById(pId) {
    let question = await questionRepository.findById(pId)
    return question;
}

export async function updateQuestion(pId, pUpdateQuestion) {
    let question = await questionRepository.update(pId, pUpdateQuestion);
    return question;
}