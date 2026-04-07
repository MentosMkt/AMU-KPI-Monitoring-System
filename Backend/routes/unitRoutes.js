const express = require('express');
const { protect, admin } = require('../middleware/authMiddleware');
const {
  createUnit,
  getUnits,
  getUnitById,
  updateUnit,
  deleteUnit
} = require('../controllers/unitController');

const router = express.Router();

router.route('/')
  .post(protect, admin, createUnit)
  .get(protect, admin, getUnits);

router.route('/:id')
  .get(protect, admin, getUnitById)
  .put(protect, admin, updateUnit)
  .delete(protect, admin, deleteUnit);

module.exports = router;
