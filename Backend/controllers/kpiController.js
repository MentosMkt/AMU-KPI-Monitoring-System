const { KPI, KPIType, Unit } = require('../models');

const createKPI = async (req, res) => {
  try {
    const {
      KPITypeId,
      UnitId,
      Weight,
      Target,
      Description,
      IsEvedenceRequired,
      Remark
    } = req.body;

    const kpiType = await KPIType.findByPk(KPITypeId);
    if (!kpiType) {
      return res.status(404).json({ message: 'KPI type not found' });
    }

    const unit = await Unit.findByPk(UnitId);
    if (!unit) {
      return res.status(404).json({ message: 'Unit not found' });
    }

    const kpi = await KPI.create({
      KPITypeId,
      UnitId,
      Weight,
      Target,
      Description,
      IsEvedenceRequired: IsEvedenceRequired || false,
      Remark,
      CreatedBy: req.user?.Id
    });

    res.status(201).json({ success: true, data: kpi });
  } catch (error) {
    console.error('Create KPI error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getKPIs = async (req, res) => {
  try {
    const kpis = await KPI.findAll({
      where: { IsArchived: false },
      include: [
        { model: KPIType, attributes: ['Id', 'KPIName'] },
        { model: Unit, attributes: ['Id', 'Name', 'Code'] }
      ],
      order: [['CreatedAt', 'DESC']]
    });

    res.json({ success: true, data: kpis });
  } catch (error) {
    console.error('Get KPIs error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getKPIById = async (req, res) => {
  try {
    const { id } = req.params;
    const kpi = await KPI.findByPk(id, {
      include: [
        { model: KPIType, attributes: ['Id', 'KPIName'] },
        { model: Unit, attributes: ['Id', 'Name', 'Code'] }
      ]
    });

    if (!kpi) {
      return res.status(404).json({ message: 'KPI not found' });
    }

    res.json({ success: true, data: kpi });
  } catch (error) {
    console.error('Get KPI error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateKPI = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      KPITypeId,
      UnitId,
      Weight,
      Target,
      Description,
      IsEvedenceRequired,
      Remark
    } = req.body;

    const kpi = await KPI.findByPk(id);
    if (!kpi) {
      return res.status(404).json({ message: 'KPI not found' });
    }

    if (KPITypeId) {
      const kpiType = await KPIType.findByPk(KPITypeId);
      if (!kpiType) {
        return res.status(404).json({ message: 'KPI type not found' });
      }
    }

    if (UnitId) {
      const unit = await Unit.findByPk(UnitId);
      if (!unit) {
        return res.status(404).json({ message: 'Unit not found' });
      }
    }

    await kpi.update({
      KPITypeId,
      UnitId,
      Weight,
      Target,
      Description,
      IsEvedenceRequired,
      Remark
    });

    res.json({ success: true, data: kpi });
  } catch (error) {
    console.error('Update KPI error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteKPI = async (req, res) => {
  try {
    const { id } = req.params;
    const kpi = await KPI.findByPk(id);
    if (!kpi) {
      return res.status(404).json({ message: 'KPI not found' });
    }

    await kpi.update({ IsArchived: true });

    res.json({ success: true, message: 'KPI archived successfully' });
  } catch (error) {
    console.error('Delete KPI error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createKPI,
  getKPIs,
  getKPIById,
  updateKPI,
  deleteKPI
};
