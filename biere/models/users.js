'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    Name: DataTypes.STRING,
    FirstName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    Birthday: DataTypes.DATE
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};