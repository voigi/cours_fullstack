'use strict';
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    Name: DataTypes.STRING,
    Code: DataTypes.STRING
  }, {});
  Country.associate = function(models) {
    // associations can be defined here
    //Country.hasMany(models.Brewery);
  };
  return Country;
};