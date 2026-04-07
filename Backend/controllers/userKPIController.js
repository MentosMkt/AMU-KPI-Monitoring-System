const { UserKPI, User, KPI } = require('../models');

const createUserKPI = async (req, res) => {
  try {
    const { KPIId, UserId, Remark } = req.body;

    const user = await User.findByPk(UserId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const kpi = await KPI.findByPk(KPIId);
    if (!kpi) {
      return res.status(404).json({ message: 'KPI not found' });
    }

    const userKPI = await UserKPI.create({
      KPIId,
      UserId,
      Remark,
      CreatedBy: req.user?.Id
    });

    res.status(201).json({ success: true, data: userKPI });
  } catch (error) {
    console.error('Create user KPI error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getUserKPIs = async (req, res) => {
  try {
    const userKpis = await UserKPI.findAll({
      where: { IsArchived: false },
      include: [
        { model: User, attributes: ['Id', 'FirstName', 'UserName', 'Email'] },
        { model: KPI, attributes: ['Id', 'Target', 'Description'] }
      ],
      order: [['CreatedAt', 'DESC']]
    });

    res.json({ success: true, data: userKpis });
  } catch (error) {
    console.error('Get user KPIs error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getUserKPIById = async (req, res) => {
  try {
    const { id } = req.params;
    const userKPI = await UserKPI.findByPk(id, {
      include: [
        { model: User, attributes: ['Id', 'FirstName', 'UserName', 'Email'] },
        { model: KPI, attributes: ['Id', 'Target', 'Description'] }
      ]
    });

    if (!userKPI) {
      return res.status(404).json({ message: 'User KPI not found' });
    }

    res.json({ success: true, data: userKPI });
  } catch (error) {
    console.error('Get user KPI error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateUserKPI = async (req, res) => {
  try {
    const { id } = req.params;
    const { KPIId, UserId, Remark } = req.body;

    const userKPI = await UserKPI.findByPk(id);
    if (!userKPI) {
      return res.status(404).json({ message: 'User KPI not found' });
    }

    if (KPIId) {
      const kpi = await KPI.findByPk(KPIId);
      if (!kpi) {
        return res.status(404).json({ message: 'KPI not found' });
      }
    }

    if (UserId) {
      const user = await User.findByPk(UserId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
    }

    await userKPI.update({ KPIId, UserId, Remark });

    res.json({ success: true, data: userKPI });
  } catch (error) {
    console.error('Update user KPI error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteUserKPI = async (req, res) => {
  try {
    const { id } = req.params;
    const userKPI = await UserKPI.findByPk(id);

    if (!userKPI) {
      return res.status(404).json({ message: 'User KPI not found' });
    }

    await userKPI.update({ IsArchived: true });

    res.json({ success: true, message: 'User KPI archived successfully' });
  } catch (error) {
    console.error('Delete user KPI error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createUserKPI,
  getUserKPIs,
  getUserKPIById,
  updateUserKPI,
  deleteUserKPI
};
