const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const RoleCategory = sequelize.define('RoleCategory', {
  Id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  CategoryName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  Description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  CreatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  CreatedBy: {
    type: DataTypes.UUID,
    allowNull: true
  },
  IsArchived: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  timestamps: false
});

module.exports = RoleCategory;