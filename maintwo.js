const express = require("express");

const user_mapping = require("./mappings/users");

let server = express();

server.use(express.json()); //make json parser to parse post request

server.use(user_mapping.router);


server.listen(3000, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server started at port 3000");
  }
});

