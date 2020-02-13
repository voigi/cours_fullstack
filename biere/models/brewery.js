'use strict';
module.exports = (sequelize, DataTypes) => {
  const Brewery = sequelize.define('Brewery', {
    Name: DataTypes.STRING,
    Description: DataTypes.STRING,
    Logo: DataTypes.STRING,
    Year: DataTypes.INTEGER
  }, {});
  Brewery.associate = function(models) {
    // associations can be defined here
    Brewery.belongsTo(models.Country,{
    onDelete:"CASCADE",
    foreignKey:{
      allowNull:false
    }
    });
    }
  return Brewery;
};