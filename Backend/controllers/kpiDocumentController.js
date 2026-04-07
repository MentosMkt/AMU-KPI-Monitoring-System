const { KPIDocument, User, KPI } = require('../models');

const createKPIDocument = async (req, res) => {
  try {
    const { UserId, KPIId, DOCTitle, FileURL, Remark } = req.body;

    const user = await User.findByPk(UserId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const kpi = await KPI.findByPk(KPIId);
    if (!kpi) {
      return res.status(404).json({ message: 'KPI not found' });
    }

    const document = await KPIDocument.create({
      UserId,
      KPIId,
      DOCTitle,
      FileURL,
      Remark,
      CreatedBy: req.user?.Id
    });

    res.status(201).json({ success: true, data: document });
  } catch (error) {
    console.error('Create KPI document error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getKPIDocuments = async (req, res) => {
  try {
    const documents = await KPIDocument.findAll({
      where: { IsArchived: false },
      include: [
        { model: User, attributes: ['Id', 'FirstName', 'UserName', 'Email'] },
        { model: KPI, attributes: ['Id', 'Target', 'Description'] }
      ],
      order: [['CreatedAt', 'DESC']]
    });

    res.json({ success: true, data: documents });
  } catch (error) {
    console.error('Get KPI documents error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getKPIDocumentById = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await KPIDocument.findByPk(id, {
      include: [
        { model: User, attributes: ['Id', 'FirstName', 'UserName', 'Email'] },
        { model: KPI, attributes: ['Id', 'Target', 'Description'] }
      ]
    });

    if (!document) {
      return res.status(404).json({ message: 'KPI document not found' });
    }

    res.json({ success: true, data: document });
  } catch (error) {
    console.error('Get KPI document error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateKPIDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const { UserId, KPIId, DOCTitle, FileURL, Remark } = req.body;

    const document = await KPIDocument.findByPk(id);
    if (!document) {
      return res.status(404).json({ message: 'KPI document not found' });
    }

    if (UserId) {
      const user = await User.findByPk(UserId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
    }

    if (KPIId) {
      const kpi = await KPI.findByPk(KPIId);
      if (!kpi) {
        return res.status(404).json({ message: 'KPI not found' });
      }
    }

    await document.update({ UserId, KPIId, DOCTitle, FileURL, Remark });

    res.json({ success: true, data: document });
  } catch (error) {
    console.error('Update KPI document error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteKPIDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await KPIDocument.findByPk(id);

    if (!document) {
      return res.status(404).json({ message: 'KPI document not found' });
    }

    await document.update({ IsArchived: true });

    res.json({ success: true, message: 'KPI document archived successfully' });
  } catch (error) {
    console.error('Delete KPI document error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createKPIDocument,
  getKPIDocuments,
  getKPIDocumentById,
  updateKPIDocument,
  deleteKPIDocument
};
