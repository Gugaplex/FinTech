// We used router to create mappings

const { response } = require("express");
const express = require("express");
const connection = require("../database");
const database = require("../database");

let router = express.Router();

//  To get all the users.
router.get("/account/all", (request, response) => {
    // let accounts = database.get_all_accounts();
    // response.status(200).send(accounts);
  
    connection.query("select * from account", (error, records) => {
      if (error) {
        console.log(error);
        response.status(500).send("Some error ocurred while executing query");
      } else {
        response.status(200).send(records);
      }
    });
  });

router.get("/account/by-account", (request, response) => {
    let account = database.get_account_by_account_id(request.query.account_id); 
    if (account) {
        response.status(200).send(account);
    }
    else {
        response.status(404).send("account not found");
    }
    
})

module.exports = { router };