const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("MY NAME IS MOHAMMED");
    res.end();
  }
});

// server.on("connection", (socket) => {
//     console.log("New connection");              alternative method
// });

server.listen(8900);

console.log("Listening on port 8900");
