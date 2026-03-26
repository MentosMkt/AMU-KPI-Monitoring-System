const express = require('express');
const {
  createRoleCategory,
  getRoleCategories,
  updateRoleCategory,
  deleteRoleCategory
} = require('../controllers/roleCategoryController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, admin, createRoleCategory)
  .get(protect, admin, getRoleCategories);

router.route('/:id')
  .put(protect, admin, updateRoleCategory)
  .delete(protect, admin, deleteRoleCategory);

module.exports = router;