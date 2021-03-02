const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
if (process.env.DATABASE_URL) {
  // the application is executed on Heroku ... use the postgres         database
  sequelize =new Sequelize(process.env.DATABASE_URL,
  {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: true,
    }
  });
} else {
  const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
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
