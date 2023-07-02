module.exports = (sequelize, DataTypes) => {
    const Demo = sequelize.define("Demo", {
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      costPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sellingPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      profitperProduct: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stockCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      soldOut: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      totalProfit: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dealerName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mailId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contactInfo: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  
    return Demo;
  };
  