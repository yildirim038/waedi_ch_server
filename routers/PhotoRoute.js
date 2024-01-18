import express from 'express';
const router = express.Router();
import * as photoService from '../services/PhotoService.js'
import { upload } from '../controllers/imageUploadController.js';



router.get('/', async (req, res, next) => res.status(200).send(await photoService.getAllPhoto()));

router.get('/:id', async (req, res, next) => res.status(200).send(await photoService.getPhotoById(req.params.id)));

router.delete('/:id', async function (req, res, next) {
    let photoId = req.params.id;
    await photoService.deletePhotopId(photoId);
    res.status(200).send("deleted");
})

router.put('/:id', upload, async function (req, res, next) {
 
    let photoId = req.params.id;
    const { photoGalleryId } = req.body;
    const image = req.file?.filename
    const updatedPhotoData = { image, photoGalleryId };
    let updatedPhoto = await photoService.updatePhoto(photoId, updatedPhotoData);
    res.status(200).send(updatedPhoto);
});

router.post('/', upload, async (req, res, next) => {

  try {

    const{ photoGalleryId } = req.body;
    const image = req.file?.filename;
    
    const photoData ={ image, photoGalleryId };
    const createdPhoto = await photoService.createPhoto(photoData);

    res.status(200).json(createdPhoto);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;

