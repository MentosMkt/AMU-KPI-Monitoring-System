const express = require('express');
const { protect, admin } = require('../middleware/authMiddleware');
const {
  createKPI,
  getKPIs,
  getKPIById,
  updateKPI,
  deleteKPI
} = require('../controllers/kpiController');

const router = express.Router();

router.route('/')
  .post(protect, admin, createKPI)
  .get(protect, admin, getKPIs);

router.route('/:id')
  .get(protect, admin, getKPIById)
  .put(protect, admin, updateKPI)
  .delete(protect, admin, deleteKPI);

module.exports = router;
