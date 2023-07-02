module.exports = (sequelize, DataTypes) => {
    const Branches = sequelize.define("Branches", {
      Branch: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Returns: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }

    });
  
    return Branches;
  };
  