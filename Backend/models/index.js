const { sequelize } = require('../config/database');

// Import all models
const User = require('./User');
const RoleCategory = require('./RoleCategory');
const Role = require('./Role');
const UserRole = require('./UserRole');
// const KPI = require('./KPI');
// const KPIType = require('./KPIType');
// const Unit = require('./Unit');
// const UserKPI = require('./UserKPI');

// Set up associations
RoleCategory.hasMany(Role, { foreignKey: 'RoleCategoryId' });
Role.belongsTo(RoleCategory, { foreignKey: 'RoleCategoryId' });

Role.hasMany(Role, { foreignKey: 'ParentRoleId', as: 'ChildRoles' });
Role.belongsTo(Role, { foreignKey: 'ParentRoleId', as: 'ParentRole' });

User.hasMany(UserRole, { foreignKey: 'UserId' });
UserRole.belongsTo(User, { foreignKey: 'UserId' });

Role.hasMany(UserRole, { foreignKey: 'RoleId' });
UserRole.belongsTo(Role, { foreignKey: 'RoleId' });

// Additional associations for KPI models (assuming based on names)
// KPIType.hasMany(KPI, { foreignKey: 'KPITypeId' });
// KPI.belongsTo(KPIType, { foreignKey: 'KPITypeId' });

// Unit.hasMany(KPI, { foreignKey: 'UnitId' });
// KPI.belongsTo(Unit, { foreignKey: 'UnitId' });

// User.hasMany(UserKPI, { foreignKey: 'UserId' });
// UserKPI.belongsTo(User, { foreignKey: 'UserId' });

// KPI.hasMany(UserKPI, { foreignKey: 'KPIId' });
// UserKPI.belongsTo(KPI, { foreignKey: 'KPIId' });

// Export all models
module.exports = {
  sequelize,
  User,
  RoleCategory,
  Role,
  UserRole,
  // KPI,
  // KPIType,
  // Unit,
  // UserKPI
};
