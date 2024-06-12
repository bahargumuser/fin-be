const { Debt } = require('../models');

const createDebt = async (req, res) => {
  try {
    const debt = await Debt.create(req.body);
    res.status(201).json(debt);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

const getDebts = async (req, res) => {
  try {
    const debts = await Debt.findAll();
    res.json(debts);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = { createDebt, getDebts };