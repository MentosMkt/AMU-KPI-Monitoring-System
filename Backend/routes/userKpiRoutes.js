const express = require('express');
const { protect, admin } = require('../middleware/authMiddleware');
const {
  createUserKPI,
  getUserKPIs,
  getUserKPIById,
  updateUserKPI,
  deleteUserKPI
} = require('../controllers/userKPIController');

const router = express.Router();

router.route('/')
  .post(protect, admin, createUserKPI)
  .get(protect, admin, getUserKPIs);

router.route('/:id')
  .get(protect, admin, getUserKPIById)
  .put(protect, admin, updateUserKPI)
  .delete(protect, admin, deleteUserKPI);

module.exports = router;
