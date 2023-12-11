import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import usersRoute from './auth/auth.js';
import advertRoute from './routers/AdvertRoute.js'
import eventRoute from './routers/EventRoute.js'
import db from './models/SequelizeSetup.js'; 

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Auth routes
app.use('/auth', usersRoute);
app.use('/events', eventRoute);
app.use('/adverts', advertRoute);
app.use('/images', express.static('./public/images'))
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
