const Sequelize = require("sequelize");

var sequelize;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, null, null, {
    dialect: "postgres",
    protocol: "postgres",
    host: "receipt-api-joey.herokuapp.com",
    dialectOptions: {
      ssl: true,
      rejectUnauthorized: false
    }
  });

} else {
  const dbConfig = require("../config/db.config");
  sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: 0,
  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  });
}  

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.receipts = require("./receipts.model.js")(sequelize, Sequelize);
db.tags = require("./tags.model.js")(sequelize, Sequelize);
module.exports = db;
