export default (sequelize, DataTypes) => {
    const Interview = sequelize.define('interview', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
       },
      imageTitel: {
        type: DataTypes.STRING,
      },
      descriptionOfImage: {
        type: DataTypes.STRING,
       },
      coverText: {
        type: DataTypes.STRING
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