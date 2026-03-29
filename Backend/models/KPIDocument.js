const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const KPIDocument = sequelize.define('KPIDocument', {
  Id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  UserId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  KPIId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  DOCTitle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  FileURL: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Remark: {
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

module.exports = KPIDocument;
