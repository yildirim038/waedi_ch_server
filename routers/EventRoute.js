import express from 'express';
const router = express.Router();
import * as eventService from '../services/EventService.js'
import multer from 'multer';
import path from 'path';



router.get('/', async (req, res, next) => res.status(200).send(await eventService.getAllEvent()));

router.get('/:id', async (req, res, next) => res.status(200).send(await eventService.getEventById(req.params.id)));

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


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage
}).single('image');

router.post('/', upload, async (req, res, next) => {
  try {

    const { name, startdatum, enddatum, adresse, plz, ort, link, text } = req.body;
    const image = req.file.filename
    
    const eventData = { name, startdatum, enddatum, adresse, plz, ort, link, image, text };
    const createdEvent = await eventService.createEvent(eventData);

    res.status(200).json(createdEvent);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;

