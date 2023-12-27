export default (sequelize, DataTypes) => {
    const Directory = sequelize.define('directory', {
      category: {
        type: DataTypes.STRING,
        allowNull: false
       },
       companyType: {
        type: DataTypes.STRING,
        allowNull: false
      },
      organization: {
        type: DataTypes.STRING,
        allowNull: false,
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
      website:{
        type: DataTypes.STRING
      },
      description:{
        type: DataTypes.STRING
      },
      contactFirstname:{
        type: DataTypes.STRING
      },
      contactLastname:{
        type: DataTypes.STRING
      },  
      tel:{
        type: DataTypes.STRING
      },
      fax:{
        type: DataTypes.STRING
      },
      email:{
        type: DataTypes.STRING
      },
    });
  
    return Directory;
  };