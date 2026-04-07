const express = require('express');
const { body } = require('express-validator');
const { registerUser, loginUser, getCurrentUser } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post(
  '/register',
  [
    body('FirstName').notEmpty().withMessage('First name is required'),
    body('FatherName').notEmpty().withMessage('Father name is required'),
    body('GrandFatherName').notEmpty().withMessage('Grand father name is required'),
    body('Email').isEmail().withMessage('Please enter a valid email'),
    body('UserName').notEmpty().withMessage('Username is required'),
    body('Phone').notEmpty().withMessage('Phone number is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('RoleCategoryId').isUUID().withMessage('Valid role category is required'),
    body('RoleId').isUUID().withMessage('Valid role is required')
  ],
  registerUser
);

router.post(
  '/login',
  [
    body('UserName').notEmpty().withMessage('Username or email is required'),
    body('password').notEmpty().withMessage('Password is required')
  ],
  loginUser
);

router.get('/me', protect, getCurrentUser);

module.exports = router;