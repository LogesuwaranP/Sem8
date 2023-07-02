module.exports = (sequelize, DataTypes) => {
    const Data = sequelize.define("Data", {
      Biscuit: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Soap: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Rice: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Oil: {
        type: DataTypes.INTEGER,
        allowNull: true,
      }

    });
  
    return Data;
  };
  