export default (sequelize, DataTypes) => {
    const Advert = sequelize.define('advert', {
      firmaName: {
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
      image:{
        type: DataTypes.STRING
      },
      tel:{
        type: DataTypes.STRING
      },
      published:{
        type: DataTypes.BOOLEAN
      }
    });
  
    return Advert;
  };