const express = require("express");
const connection = require("../database");

let router = express.Router();

//  To get all the users.
router.get("/user/all", (request, response) => {
  connection.query("select * from user", (error, records) => {
    if (error) {
      console.log(error);
      response.status(500).send("Some error ocurred while executing query");
    } else {
      response.status(200).send(records);
    }
  });
});

router.get("/user/by-id", (request, response) => {
  if (!request.query.uid) {
    console.log("Received invalid user_id: " + request.query.uid);
    response.status(400).send("Received invalid user_id");
  } else {
    connection.query(
      `select * from user where user_id = ${request.query.uid}`,
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
    `insert into user (first_name, last_name, email, phone, plan_id, signup_date)
    values (
      '${request.body.first_name}', 
      '${request.body.last_name}',
      '${request.body.email}', 
      '${request.body.phone}',
      '${request.body.plan_id}',
      now())`,

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
