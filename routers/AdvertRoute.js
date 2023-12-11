import express from 'express';
const router = express.Router();
import * as advertService from '../services/AdvertService.js'
import { upload } from '../controllers/imageUploadController.js';

router.get('/', async (req, res, next) => res.status(200).send(await advertService.getAllAdvert()));

router.get('/:id', async (req, res, next) => res.status(200).send(await advertService.getAdvertById(req.params.id)));

router.delete('/:id', async function (req, res, next) {
    let advertId = req.params.id;
    await advertService.deleteAdvert(advertId);
    res.status(200).send("deleted");
})

router.put('/:id', async function (req, res, next) {
    let advertId = req.params.id;
    let advertToBeUpdated = req.body;
    let updatedAdvert = await advertService.updateAdvert(advertId, advertToBeUpdated);
    res.status(200).send(updatedAdvert);
});

router.post('/', upload, async (req, res, next) => {
  try {

    const { firmaName,adresse, plz, ort, tel, published } = req.body;
    const image = req.file.filename 
    
    const advertData = { firmaName, adresse, plz, ort, tel, published, image };
    const createdAdvert = await advertService.createAdvert(advertData);

    res.status(200).json(createdAdvert);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;

