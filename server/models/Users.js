module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
      mailid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      usertype: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
 
    return Users;
  };
  