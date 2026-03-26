const express = require('express');
const {
  createRole,
  getRoles,
  getRoleById,
  updateRole,
  deleteRole
} = require('../controllers/roleController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, admin, createRole)
  .get(protect, admin, getRoles);

router.route('/:id')
  .get(protect, admin, getRoleById)
  .put(protect, admin, updateRole)
  .delete(protect, admin, deleteRole);

module.exports = router;