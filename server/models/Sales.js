module.exports = (sequelize, DataTypes) => {
    const Sales = sequelize.define("Sales", {
      Week: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Invesment: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Returns: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Targets: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
     
    });
  
    return Sales;
  };
  