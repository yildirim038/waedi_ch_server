import Sequelize from 'sequelize';
import {database,username,password,host,dialect,pool} from "../config/config.js";
import UserModel from "./User.js"
import EventModel from './Event.js'
import InterviewModel from './Interview.js';
import QuestionModel from './Question.js';
import DirectoryModel from './Directory.js';
import PhotoGalleryModel from './PhotoGallery.js';
import PhotoModel from './Photo.js';
import AdvertModel from './Advert.js';


const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  operatorsAliases: false,
  pool: {
    max: pool.max,
    min: pool.min,
    acquire: pool.acquire,
    idle: pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user         = UserModel        (sequelize,Sequelize);
db.event        = EventModel       (sequelize,Sequelize);
db.interview    = InterviewModel   (sequelize,Sequelize);
db.question     = QuestionModel    (sequelize,Sequelize);
db.directory    = DirectoryModel   (sequelize,Sequelize);
db.photoGallery = PhotoGalleryModel(sequelize,Sequelize);
db.photo        = PhotoModel       (sequelize,Sequelize);
db.advert       = AdvertModel      (sequelize,Sequelize);
// create relationship

db.interview.hasMany(db.question);
db.photoGallery.hasMany(db.photo);
export default db;


