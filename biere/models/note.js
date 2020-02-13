'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    Note: DataTypes.INTEGER
  }, {});
  Note.associate = function(models) {
    // associations can be defined here
  };
  return Note;
};