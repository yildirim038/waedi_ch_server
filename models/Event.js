export default (sequelize, DataTypes) => {
    const Event = sequelize.define('event', {
      eventType:{
        type: DataTypes.STRING,
        allowNull: false
      },
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
      },
      link:{
        type: DataTypes.STRING
      }
    });
  
    return Event;
  };