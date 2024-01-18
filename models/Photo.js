export default (sequelize, DataTypes) => {
    const Photo = sequelize.define('photo', {
      image:{
        type: DataTypes.STRING
      }
    });
  
    return Photo;
  };