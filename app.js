import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import adminsRouter from './auth/auth.js';
import db from './models/SequelizeSetup.js'; 

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Auth routes
app.use('/auth', adminsRouter);

// Test route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Sync database and start server
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
