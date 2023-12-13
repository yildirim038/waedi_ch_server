export default (sequelize, DataTypes) => {
    const Question = sequelize.define('question', {
      question: {
        type: DataTypes.STRING,
        allowNull: false
       },
      antwort: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return Question;
  };