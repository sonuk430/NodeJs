const express = require("express");

const app = express();

// app.use("/about/:id", (req, res) => {
//   console.log(req.params);
//   res.send({ Page: "About Page" });
// });

// app.use("/about", (req, res) => {
//   res.send({ Page: "About Page" });
// });

// app.use("/more/name", (req, res) => {
//   res.send({ Page: "More Name Page" });
// });

// app.use("/", (req, res) => {
//   res.send({ Page: "Home Page" });
// });

app.listen(4000, () => {
  console.log("Server running on 4000");
});
