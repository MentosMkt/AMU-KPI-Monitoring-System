const express = require('express');
const { protect, admin } = require('../middleware/authMiddleware');
const {
  createKPIDocument,
  getKPIDocuments,
  getKPIDocumentById,
  updateKPIDocument,
  deleteKPIDocument
} = require('../controllers/kpiDocumentController');

const router = express.Router();

router.route('/')
  .post(protect, admin, createKPIDocument)
  .get(protect, admin, getKPIDocuments);

router.route('/:id')
  .get(protect, admin, getKPIDocumentById)
  .put(protect, admin, updateKPIDocument)
  .delete(protect, admin, deleteKPIDocument);

module.exports = router;
