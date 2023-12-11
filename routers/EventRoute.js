import express from 'express';
const router = express.Router();
import * as eventService from '../services/EventService.js'
import { upload } from '../controllers/imageUploadController.js';



router.get('/', async (req, res, next) => res.status(200).send(await eventService.getAllEvent()));

router.get('/:id', async (req, res, next) => res.status(200).send(await eventService.getEventById(req.params.id)));

router.delete('/:id', async function (req, res, next) {
    let eventId = req.params.id;
    await eventService.deleteEvent(eventId);
    res.status(200).send("deleted");
})

router.put('/:id', upload, async function (req, res, next) {
    let eventId = req.params.id;
    const { name, startdatum, enddatum, adresse, plz, ort, link, text } = req.body;
    const image = req.file?.filename
    const updatedEventData = { name, startdatum, enddatum, adresse, plz, ort, link, image, text };
    let updatedEvent = await eventService.updateEvent(eventId, updatedEventData);
    res.status(200).send(updatedEvent);
});


router.post('/', upload, async (req, res, next) => {
  try {

    const { name, startdatum, enddatum, adresse, plz, ort, link, text } = req.body;
    const image = req.file?.filename;
    
    const eventData = { name, startdatum, enddatum, adresse, plz, ort, link, image, text };
    const createdEvent = await eventService.createEvent(eventData);

    res.status(200).json(createdEvent);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;

