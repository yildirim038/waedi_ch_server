export default (sequelize, DataTypes) => {
    const Interview = sequelize.define('interview', {
      title: {
        type: DataTypes.TEXT('long'),
        allowNull: false
       },
      imageTitel: {
        type: DataTypes.STRING,
      },
      descriptionOfImage: {
        type: DataTypes.STRING,
       },
      coverText: {
        type: DataTypes.TEXT('long')
      },
      image:{
        type: DataTypes.STRING
      } ,
      author:{
        type: DataTypes.STRING
      },
      datum:{
        type: DataTypes.DATEONLY
      }
    });
  
    return Interview;
  };