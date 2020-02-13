'use strict';
module.exports = (sequelize, DataTypes) => {
  const Composition = sequelize.define('Composition', {
    Percent: DataTypes.FLOAT
  }, {});
  Composition.associate = function(models) {
    // associations can be defined here
  };
  return Composition;
};