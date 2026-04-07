const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const KPIType = sequelize.define('KPIType', {
  Id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  KPIName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ParentKPIID: {
    type: DataTypes.UUID,
    allowNull: true
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

module.exports = KPIType;