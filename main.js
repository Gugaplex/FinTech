// telling node to include express package so that I can use it later in the file.
const express = require("express");

// This is a function which returns sum of first n natural numbers.
function sum_of_first_n_numbers(n) {
  let sum = 0;
  for (i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// This function
function product(a, b) {
    return a*b;

}

// console.log(sum_of_first_n_numbers(50));

let server = express();

let router = express.Router();

//http://localhost:3000/sum/first-n-numbers?n=10
router.get("/sum/first-n-numbers", (request, response) => {
  // Get the parameter n from the request.
  let n = request.query.n;

  // Get the sum of n numbers;
  let sum = sum_of_first_n_numbers(n);

  // Return the sum as response.
  response.status(200).send("Sum is: " + sum);
});

//http://localhost:3000/product?a=10&b=6
router.get("/product", (request, response) => {
    // Get the parameter n from the request.
    let a = request.query.a;
    let b = request.query.b;
  
    // Get the sum of n numbers;
    let prod = product(a, b);
  
    // Return the sum as response.
    response.status(200).send("Product is: " + prod);
  });

// Tell the server to use the router.
server.use(router);

server.listen(3000, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server running at port 3000");
  }
});
