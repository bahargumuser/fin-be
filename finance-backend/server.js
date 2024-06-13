const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth');
const debtRoutes = require('./routes/debts');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/debts', debtRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});