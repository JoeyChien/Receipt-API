const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Receipt = sequelize.define("receipt", {
    user_id: {
      type: Sequelize.INTEGER,
    },
    tag_id: {
      type: Sequelize.INTEGER,
    },
    payment_id: {
      type: Sequelize.INTEGER,
    },
    store_info: {
      type: Sequelize.TEXT,
    },
    transaction_time: {
      type: Sequelize.DATE,
    },
    receipt_id_no: {
      type: Sequelize.INTEGER,
    },
    content: {
      type: Sequelize.TEXT,
    },
    total: {
      type: Sequelize.INTEGER,
    },
  });
  return Receipt;
};
