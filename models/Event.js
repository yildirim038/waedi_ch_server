export default (sequelize, DataTypes) => {
    const Event = sequelize.define('event', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
       },
      startdatum: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      enddatum: {
        type: DataTypes.DATEONLY,
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
      text:{
        type: DataTypes.STRING
      }
    });
  
    return Event;
  };