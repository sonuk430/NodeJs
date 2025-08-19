const mongoose = require("mongoose");

const dbConnection = (url) => {
  mongoose.connect(url);
  console.log("DB Connection Successfully");
};

module.exports = dbConnection;
