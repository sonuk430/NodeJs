const http = require("http");

const server = http.createServer((req, res) => {
  //   res.end("Hello Sonu");

  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About Page");
  } else {
    res.end("page not found");
  }
});

server.listen(4000, () => {
  console.log(`i am Listening at port number 4000`);
});
