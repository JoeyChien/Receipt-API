// Bring in required Modules
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Bring in the route
const routes = require("./app/routes");

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

app.use("/api/receipts", routes);

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
