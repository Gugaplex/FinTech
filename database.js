const mysql = require("mysql");

let connection =  mysql.createConnection({
    host: "137.132.92.94",
    user: "fintechlab",
    password: "FinTechLab",
    port: 12865,
    database: "fintechbackendstub"
})
connection.connect((errors) => {
    if (errors) console.log(errors);
    else console.log("Connected to MySQL server");
});

module.exports = connection;
//connection.query(
  //  "select * from customer", (errors, records) => {
  //  if (errors) console.log(errors);
  //  else console.log(records);
//});


  // Create
 //connection.query(
   //"insert into seller (seller_id, seller_name, seller_wallet) values (101, 'Dan', '1999999')",
   //(errors, records) => {
    // if (errors) console.log(errors);
    // else console.log(records);
   //}
 //);

// Retrieve
// connection.query("select * from seller", (errors, records) => {
//   if (errors) console.log(errors);
//   else console.log(records);
// });

// Update wallet by seller_id
// connection.query(
//   "update seller set seller_wallet = 10000 where seller_id = 90",
//   (errors, records) => {
//     if (errors) console.log(errors);
//     else console.log(records);
//   }
// );

//Deleting a record by seller id
