const express = require("express");

const app = express();
const PORT = 8082;

//! Server Starting
app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}...`);
});
