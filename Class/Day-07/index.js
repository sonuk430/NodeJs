const express = require("express");

const app = express();

// app.use("/user", (req, res) => {
//   res.send({ name: "Sonu" });
// });

app.get("/user", (req, res) => {
  res.send({ name: "Sonu" });
});

app.post("/user", (req, res) => {
  res.send({ name: "Sonu" });
});

// get,post,patch,put,delete

app.listen(4000, () => {
  console.log("Server running on 4000");
});
