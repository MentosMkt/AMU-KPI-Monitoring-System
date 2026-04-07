const express = require('express');
const {
  assignRoleToUser,
  getUserCurrentRole,
  getUserRoleById,
  getAllUserRoles,
  endUserRole,
  deleteUserRole
} = require('../controllers/userRoleController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, admin, assignRoleToUser)
  .get(protect, admin, getAllUserRoles);

router.route('/user/:userId')
  .get(protect, admin, getUserCurrentRole);

router.route('/:id/end')
  .put(protect, admin, endUserRole);

router.route('/:id')
  .get(protect, admin, getUserRoleById)
  .delete(protect, admin, deleteUserRole);

module.exports = router;