import express from 'express';
const router = express.Router();
import * as advertService from '../services/AdvertService.js'
import { upload } from '../controllers/imageUploadController.js';



router.get('/', async (req, res, next) => res.status(200).send(await advertService.getAllAdvert()));

router.get('/:id', async (req, res, next) => res.status(200).send(await advertService.getAdvertById(req.params.id)));

router.delete('/:id', async function (req, res, next) {
    let id = req.params.id;
    await advertService.deleteAdvert(id);
    res.status(200).send("deleted");
})

router.put('/:id', upload, async function (req, res, next) {
    let id = req.params.id;
    const { name, email, publish, adresse, plz, ort, link, text, advertPage ,advertType } = req.body;
    const image = req.file?.filename
    const updateData = { name, email, publish, adresse, plz, ort, link, image, text ,advertPage, advertType };
    let updatedData = await advertService.updateAdvert(id, updateData);
    res.status(200).send(updatedData);
});


router.post('/', upload, async (req, res, next) => {
  try {

    const { name, email, publish, adresse, plz, ort, link, text, advertPage ,advertType } = req.body;
    const image = req.file?.filename;
    
    const data = { name, email, publish, adresse, plz, ort, link, image, text ,advertPage, advertType };
    const createdAdvert = await advertService.createAdvert(data);

    res.status(200).json(createdAdvert);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;

