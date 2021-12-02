const express = require("express");
const connection = require("../database");

let router = express.Router();

//  To get all the users.
router.get("/user/all", (request, response) => {
  connection.query("select * from users", (error, records) => {
    if (error) {
      console.log(error);
      response.status(500).send("Some error ocurred while executing query");
    } else {
      response.status(200).send(records);
    }
  });
});

router.get("/user/by-id", (request, response) => {
  if (!request.query.user_id) {
    console.log("Received invalid user_id: " + request.query.user_id);
    response.status(400).send("Received invalid user_id");
  } else {
    connection.query(
      `select * from users where user_id = ${request.query.user_id}`,
      (error, records) => {
        if (error) {
          console.log(error);
          response.status(500).send("Some error ocurred while executing query");
        } else {
          response.status(200).send(records);
        }
      }
    );
  }
});

// To add a new user to our database
router.post("/user/add", (request, response) => {
    connection.query(
      `insert into users (first_name, last_name, mobile, email, login_id, login_password)
      values (
        '${request.body.first_name}', 
        '${request.body.last_name}',
        '${request.body.mobile}', 
        '${request.body.email}',
        '${request.body.login_id}',
        '${request.body.login_password}')`,
  
      (error, records) => {
        if (error) {
          console.log(error);
          response.status(500).send("Some error ocurred while executing query");
        } else {
          response.status(200).send("User added to the database!");
        }
      }
    );
  });
  

module.exports = { router };
