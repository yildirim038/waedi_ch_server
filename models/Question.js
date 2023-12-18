export default (sequelize, DataTypes) => {
    const Question = sequelize.define('question', {
      question: {
        type: DataTypes.TEXT('long'),
        allowNull: false
       },
      antwort: {
        type: DataTypes.TEXT('long'),
        allowNull: false
      }
    });
  
    return Question;
  };