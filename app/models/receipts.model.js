const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Receipt = sequelize.define("receipt", {
    user_id: {
      type: Sequelize.INTEGER,
    },
    tag_id: {
      type: Sequelize.INTEGER,
    },
    store_info: {
      type: Sequelize.TEXT,
    },
    transaction_time: {
      type: Sequelize.STRING,
    },
    receipt_id_no: {
      type: Sequelize.INTEGER,
    },
    content: {
      type: Sequelize.TEXT,
    },
    total: {
      type: Sequelize.DOUBLE,
    },
  });
  return Receipt;
};
