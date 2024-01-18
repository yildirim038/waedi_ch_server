export default (sequelize, DataTypes) => {
    const PhotoGallery = sequelize.define('photoGallery', {
      name: {
        type: DataTypes.TEXT('long'),
       },
       description: {
        type: DataTypes.STRING,
      }
    });
  
    return PhotoGallery;
  };