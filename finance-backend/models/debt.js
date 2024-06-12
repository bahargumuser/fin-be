module.exports = (sequelize, DataTypes) => {
    const Debt = sequelize.define('Debt', {
      debtName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lenderName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      debtAmount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      interestRate: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      paymentStart: {
        type: DataTypes.DATE,
        allowNull: false
      },
      installment: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING
      }
    });
    return Debt;
  };  