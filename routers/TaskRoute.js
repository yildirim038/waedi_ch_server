import express from 'express';
const router = express.Router();
import * as tasksService from '../services/TaskService.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => res.status(200).send(await tasksService.getAllTasks())));
router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await tasksService.getTasksById(req.params.id))));
router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await tasksService.createTasks(req.body))));
router.delete('/:id', async function (req, res, next) {
    let tasksId = req.params.id;
    await tasksService.deleteTasks(tasksId);
    res.status(200).send("deleted");
})
router.put('/:id', async function (req, res, next) {
    let taskId = req.params.id;
    let tasksToBeUpdated = req.body;
    let updatedAssistant = await tasksService.updateTasks(taskId, tasksToBeUpdated);
    res.status(200).send(updatedAssistant);
});

export default router;
