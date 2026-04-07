const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const UserRole = sequelize.define('UserRole', {
  Id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  UserId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  RoleId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  FromDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  ToDate: {
    type: DataTypes.DATE,
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

module.exports = UserRole;