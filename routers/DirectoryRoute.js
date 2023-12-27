import express from 'express';
const router = express.Router();
import * as directoryService from '../services/DirectoryService.js'
import { upload } from '../controllers/imageUploadController.js';



router.get('/', async (req, res, next) => res.status(200).send(await directoryService.getAllDirectory()));

router.get('/:id', async (req, res, next) => res.status(200).send(await directoryService.getDirectoryById(req.params.id)));

router.delete('/:id', async function (req, res, next) {
    let directoryId = req.params.id;
    await directoryService.deleteDirectory(directoryId);
    res.status(200).send("deleted");
})

router.put('/:id', upload, async function (req, res, next) {
    let directoryId = req.params.id;
    const { category, companyType, organization, adresse, plz, ort, website, description,contactFirstname,contactLastname,tel,fax,email } = req.body;
    const image = req.file?.filename
    const updatedDirectoryData = { category, companyType, organization, adresse, plz, ort, website, description,contactFirstname,contactLastname,tel,fax,email,image };
    let updatedDirectory = await directoryService.updateDirectory(directoryId, updatedDirectoryData);
    res.status(200).send(updatedDirectory);
});


router.post('/', upload, async (req, res, next) => {
  try {

    const { category, companyType, organization, adresse, plz, ort, website, description,contactFirstname,contactLastname,tel,fax,email} = req.body;
    const image = req.file?.filename;
    const directoryData = {category, companyType, organization, adresse, plz, ort, website, description,contactFirstname,contactLastname,tel,fax,email, image };
    const createdDirectory = await directoryService.createDirectory(directoryData);

    res.status(200).json(createdDirectory);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;

