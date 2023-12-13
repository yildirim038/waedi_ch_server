import express from 'express';
const router = express.Router();
import * as questionService from '../services/QuestionService.js'


router.get('/', async (req, res, next) => res.status(200).send(await questionService.getAllQuestion()));
router.get('/:id', async (req, res, next) => res.status(200).send(await questionService.getQuestionById(req.params.id)));
router.post('/', async (req, res, next) => res.status(200).send(await questionService.createQuestion(req.body)));
router.delete('/:id', async function (req, res, next) {
    let questionId = req.params.id;
    await questionService.deleteQuestion(questionId);
    res.status(200).send("deleted");
})
router.put('/:id', async function (req, res, next) {
    let questionId = req.params.id;
    let questionToBeUpdated = req.body;
    let updatedQuestion = await questionService.updateQuestion(questionId, questionToBeUpdated);
    res.status(200).send(updatedQuestion);
});

export default router;
