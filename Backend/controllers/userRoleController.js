const { UserRole, User, Role } = require('../models');
const { Op } = require('sequelize');

const assignRoleToUser = async (req, res) => {
  try {
    const { UserId, RoleId, FromDate, ToDate } = req.body;
    
    const user = await User.findByPk(UserId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    const role = await Role.findByPk(RoleId);
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }
    
    const existingRole = await UserRole.findOne({
      where: {
        UserId,
        IsArchived: false,
        [Op.or]: [
          { ToDate: null },
          { ToDate: { [Op.gte]: new Date() } }
        ]
      }
    });
    
    if (existingRole) {
      return res.status(400).json({ 
        message: 'User already has an active role. End current role first.' 
      });
    }
    
    const userRole = await UserRole.create({
      UserId,
      RoleId,
      FromDate: FromDate || new Date(),
      ToDate,
      CreatedBy: req.user?.Id
    });
    
    res.status(201).json({
      success: true,
      data: userRole
    });
  } catch (error) {
    console.error('Assign role error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getUserCurrentRole = async (req, res) => {
  try {
    const { userId } = req.params;
    
    const userRole = await UserRole.findOne({
      where: {
        UserId: userId,
        IsArchived: false,
        [Op.or]: [
          { ToDate: null },
          { ToDate: { [Op.gte]: new Date() } }
        ]
      },
      include: [
        {
          model: Role,
          include: ['ParentRole']
        },
        {
          model: User,
          attributes: ['Id', 'FirstName', 'FatherName', 'GrandFatherName', 'Email', 'UserName']
        }
      ],
      order: [['CreatedAt', 'DESC']]
    });
    
    res.json({
      success: true,
      data: userRole
    });
  } catch (error) {
    console.error('Get user role error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllUserRoles = async (req, res) => {
  try {
    const userRoles = await UserRole.findAll({
      where: { IsArchived: false },
      include: [
        {
          model: User,
          attributes: ['Id', 'FirstName', 'FatherName', 'GrandFatherName', 'Email', 'UserName']
        },
        {
          model: Role,
          attributes: ['Id', 'RoleName'],
          include: ['ParentRole']
        }
      ],
      order: [['CreatedAt', 'DESC']]
    });
    
    res.json({
      success: true,
      data: userRoles
    });
  } catch (error) {
    console.error('Get user roles error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const endUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { ToDate } = req.body;
    
    const userRole = await UserRole.findByPk(id);
    
    if (!userRole) {
      return res.status(404).json({ message: 'User role assignment not found' });
    }
    
    await userRole.update({
      ToDate: ToDate || new Date()
    });
    
    res.json({
      success: true,
      message: 'User role ended successfully',
      data: userRole
    });
  } catch (error) {
    console.error('End user role error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    
    const userRole = await UserRole.findByPk(id);
    
    if (!userRole) {
      return res.status(404).json({ message: 'User role assignment not found' });
    }
    
    await userRole.update({ IsArchived: true });
    
    res.json({
      success: true,
      message: 'User role archived successfully'
    });
  } catch (error) {
    console.error('Delete user role error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  assignRoleToUser,
  getUserCurrentRole,
  getAllUserRoles,
  endUserRole,
  deleteUserRole
};