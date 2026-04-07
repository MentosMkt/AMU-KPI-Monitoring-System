const express = require('express');
const { protect, admin } = require('../middleware/authMiddleware');
const {
  createUserKPIResult,
  getUserKPIResults,
  getUserKPIResultById,
  updateUserKPIResult,
  deleteUserKPIResult
} = require('../controllers/userKPIResultController');

const router = express.Router();

router.route('/')
  .post(protect, admin, createUserKPIResult)
  .get(protect, admin, getUserKPIResults);

router.route('/:id')
  .get(protect, admin, getUserKPIResultById)
  .put(protect, admin, updateUserKPIResult)
  .delete(protect, admin, deleteUserKPIResult);

module.exports = router;
