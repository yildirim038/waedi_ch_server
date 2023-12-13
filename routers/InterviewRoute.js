import express from 'express';
const router = express.Router();
import * as interviewService from '../services/InterviewService.js'
import { upload } from '../controllers/imageUploadController.js';



router.get('/', async (req, res, next) => res.status(200).send(await interviewService.getAllInterview()));

router.get('/:id', async (req, res, next) => res.status(200).send(await interviewService.getInterviewById(req.params.id)));

router.delete('/:id', async function (req, res, next) {
    let interviewId = req.params.id;
    await interviewService.deleteInterview(interviewId);
    res.status(200).send("deleted");
})

router.put('/:id', upload, async function (req, res, next) {
    let interviewId = req.params.id;
    const { title, imageTitel, descriptionOfImage, coverText, author, datum} = req.body;
    const image = req.file?.filename
    const updatedInterviewData = { title, imageTitel, descriptionOfImage, coverText, author, datum,image };
    let updatedInterview = await interviewService.updateInterview(interviewId, updatedInterviewData);
    res.status(200).send(updatedInterview);
});


router.post('/', upload, async (req, res, next) => {
  try {
    const { title, imageTitel, descriptionOfImage, coverText, author, datum} = req.body;
    const image = req.file?.filename
    const interviewData = { title, imageTitel, descriptionOfImage, coverText, author, datum,image }
    const createdInterview = await interviewService.createInterview(interviewData);

    res.status(200).json(createdInterview);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;

