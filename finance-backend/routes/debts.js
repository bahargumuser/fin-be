const express = require('express');
const router = express.Router();
const { createDebt, getDebts } = require('../controllers/debtController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createDebt);
router.get('/', authMiddleware, getDebts);

module.exports = router;
