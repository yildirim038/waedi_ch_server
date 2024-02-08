export default (sequelize, DataTypes) => {
    const Advert = sequelize.define('advert', {
      name:{
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      publish: {
        type: DataTypes.BOOLEAN,
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
      image:{
        type: DataTypes.STRING
      } ,
      text:{
        type: DataTypes.STRING
      },
      link:{
        type: DataTypes.STRING
      },
      advertPage:{
        type: DataTypes.STRING
      },
      advertType:{
        type: DataTypes.STRING
      }
    });
  
    return Advert;
  };