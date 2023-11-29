import express from 'express';
const router = express.Router();
import * as eventService from '../services/EventService.js'

router.get('/', async (req, res, next) => res.status(200).send(await eventService.getAllEvent()));

router.get('/:id', async (req, res, next) => res.status(200).send(await eventService.getEventById(req.params.id)));

router.post('/', async (req, res, next) => res.status(200).send(await eventService.createEvent(req.body)));

router.delete('/:id', async function (req, res, next) {
    let eventId = req.params.id;
    await eventService.deleteEvent(eventId);
    res.status(200).send("deleted");
})

router.put('/:id', async function (req, res, next) {
    let eventId = req.params.id;
    let eventToBeUpdated = req.body;
    let updatedEvent = await eventService.updateEvent(eventId, eventToBeUpdated);
    res.status(200).send(updatedEvent);
});
export default router;
