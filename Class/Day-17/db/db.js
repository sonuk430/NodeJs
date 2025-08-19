const mongoose = require("mongoose");

const dbConnected = (url) => {
  mongoose.connect(url);
};

module.exports = dbConnected;
