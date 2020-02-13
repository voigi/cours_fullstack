'use strict';
module.exports = (sequelize, DataTypes) => {
  const Beer = sequelize.define('Beer', {
    Name: DataTypes.STRING,
    Country: DataTypes.INTEGER,
    Degree: DataTypes.FLOAT,
    Description: DataTypes.STRING,
    Picture: DataTypes.STRING,
    Year: DataTypes.INTEGER
  }, {});
  Beer.associate = function(models) {
    // associations can be defined here
  };
  return Beer;
};