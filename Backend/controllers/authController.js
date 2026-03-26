const { User, UserRole, Role } = require('../models');
const generateToken = require('../utils/generateToken');
const { validationResult } = require('express-validator');

const registerUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const { FirstName, FatherName, GrandFatherName, Email, UserName, Phone, password } = req.body;
    
    const userExists = await User.findOne({ where: { Email } });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    const user = await User.create({
      FirstName,
      FatherName,
      GrandFatherName,
      Email,
      UserName,
      Phone,
      password
    });
    
    res.status(201).json({
      success: true,
      user: user.getPublicProfile(),
      token: generateToken(user.Id)
    });
    
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { UserName, password } = req.body;
    
    const user = await User.findOne({ 
      where: { 
        [require('sequelize').Op.or]: [
          { UserName },
          { Email: UserName }
        ]
      } 
    });
    
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid username/email or password' });
    }
    
    if (user.IsArchived) {
      return res.status(401).json({ message: 'Account is deactivated' });
    }
    
    res.json({
      success: true,
      user: user.getPublicProfile(),
      token: generateToken(user.Id)
    });
    
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getCurrentUser = async (req, res) => {
  try {
    const userWithRole = await User.findByPk(req.user.Id, {
      include: [{
        model: UserRole,
        where: { IsArchived: false },
        required: false,
        include: [{
          model: Role,
          where: { IsArchived: false },
          required: false
        }]
      }]
    });
    
    res.json({
      success: true,
      user: userWithRole.getPublicProfile(),
      role: userWithRole.UserRoles?.[0]?.Role
    });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser
};