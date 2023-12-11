import Sequelize from 'sequelize';
import {database,username,password,host,dialect,pool} from "../config/config.js";
import UserModel from "./User.js"
import EventModel from './Event.js'
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

db.user = UserModel(sequelize, Sequelize);
db.event= EventModel(sequelize, Sequelize);
db.advert= AdvertModel(sequelize,Sequelize);


// create relationship

//db.user.hasMany(db.galerie);
export default db;


