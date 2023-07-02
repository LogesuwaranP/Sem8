module.exports = (sequelize, DataTypes) => {
    const Feedback = sequelize.define("Feedback", {
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Suggestion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Rating: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  
    return Feedback;
  };
  