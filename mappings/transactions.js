const express = require("express");
const connection = require("../database");

let router = express.Router();

//  To get all the users.
router.get("/transaction/all", (request, response) => {
  connection.query("select * from transactions", (error, records) => {
    if (error) {
      console.log(error);
      response.status(500).send("Some error ocurred while executing query");
    } else {
      response.status(200).send(records);
    }
  });
});

router.get("/transaction/by-id", (request, response) => {
  if (!request.query.transaction_id) {
    console.log("Received invalid transaction_id: " + request.query.transaction_id);
    response.status(400).send("Received invalid transaction_id");
  } else {
    connection.query(
      `select * from transactions where transaction_id = ${request.query.transaction_id}`,
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
router.post("/transaction/add", (request, response) => {
    connection.query(
      `insert into users (transaction_title, transaction_value, category, payer_wallet_id, payee_wallet_id)
      values (
        '${request.body.transaction_title}', 
        '${request.body.transaction_value}',
        '${request.body.category}', 
        '${request.body.payer_wallet_id}',
        '${request.body.payee_wallet_id}')`,
  
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
