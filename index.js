const http = require("http");
const app = require("./app");
const db = require("./database.js");
const port = process.env.PORT || 3010;

let server = http.createServer(app);

server
  .listen(port, function () {
    console.log("Server has started at port number", port);
  })
  .on("error", (error) => {
    console.log("Unable to start app , Error>>>>>>", error);
  });
