const express = require('express');
const { protect, admin } = require('../middleware/authMiddleware');
const {
  createKPIType,
  getKPITypes,
  getKPITypeById,
  updateKPIType,
  deleteKPIType
} = require('../controllers/kpiTypeController');

const router = express.Router();

router.route('/')
  .post(protect, admin, createKPIType)
  .get(protect, admin, getKPITypes);

router.route('/:id')
  .get(protect, admin, getKPITypeById)
  .put(protect, admin, updateKPIType)
  .delete(protect, admin, deleteKPIType);

module.exports = router;
