import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as userService from '../services/UserService.js'
import db from '../models/SequelizeSetup.js';
import authMiddleware from './authMiddleware.js';
const router = express.Router();



router.get('/', async (req, res, next) => res.status(200).send(await userService.getAllAdmin()));
router.get('/:id',async (req, res, next) => res.status(200).send(await userService.getAdminById(req.params.id)));

router.post('/register', async (req, res) => {
  const { firstname,lastname,adresse,plz,ort,firma,email, password, role } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    await userService.createUser({ firstname,lastname,adresse,plz,ort,firma,email, password: hashedPassword, role });

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await db.user.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: ' Username or password is wrong' });
    }

    const token = jwt.sign({ email: email, role: user.role }, 'secret-key', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

router.get('/tokenCheck', authMiddleware, (req, res) => {
  try {
    res.json({ message: 'Token is valid', role: req.user.role });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Token is invalid' });
  }
});

router.post('/logout', (req, res) => {
  res.json({ message: 'Logout successful' });
});

router.delete('/:id', async function (req, res, next) {
    let userId = req.params.id;
    await userService.deleteUser(userId);
    res.status(200).send("deleted");
})

router.put('/:id', async function (req, res, next) {
    let userId = req.params.id;
    let userToBeUpdated = req.body;
    let updatedPerson = await userService.updateUser(userId, userToBeUpdated);
    res.status(200).send(updatedPerson);
});



export default router;
