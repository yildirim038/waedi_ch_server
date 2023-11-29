export default (sequelize, DataTypes) => {
const User = sequelize.define('user', {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
    },
  lastname: {
  type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  adresse: {
    type: DataTypes.STRING
  },
  plz: {
    type: DataTypes.INTEGER
  },
  ort:{
    type: DataTypes.STRING
  },
  role: {
    type: DataTypes.STRING
  },
  firma:{
    type: DataTypes.STRING
  }
});

return User;
};