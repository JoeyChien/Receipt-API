// Bring in required Modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./app/routes");
app.use("/api", routes);
var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

const db = require("./app/models");
db.sequelize.sync();

// Define PORT
const PORT = process.env.PORT || 8080;

// Listen to the defined PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


process.on('unhandledRejection', error => {
  console.error('unhandledRejection', error);
  process.exit(1) // To exit with a 'failure' code
});
