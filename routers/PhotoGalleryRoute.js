import express from 'express';
const router = express.Router();
import * as photoGalleryService from '../services/PhotoGalleryService.js'


router.get('/', async (req, res, next) => res.status(200).send(await photoGalleryService.getAllPhotoGallery()));
router.get('/:id', async (req, res, next) => res.status(200).send(await photoGalleryService.getPhotoGalleryById(req.params.id)));
router.post('/', async (req, res, next) => res.status(200).send(await photoGalleryService.createPhotoGallery(req.body)));
router.delete('/:id', async function (req, res, next) {
    let photoGalleryId = req.params.id;
    await photoGalleryService.deletePhotoGallery(photoGalleryId);
    res.status(200).send("deleted");
})
router.put('/:id', async function (req, res, next) {
    let photoGalleryId = req.params.id;
    let photoGalleryToBeUpdated = req.body;
    let updatedPhotoGallery = await photoGalleryService.updatePhotoGallery(photoGalleryId, photoGalleryToBeUpdated);
    res.status(200).send(updatedPhotoGallery);
});

export default router;
