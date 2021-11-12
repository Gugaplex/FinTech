let age = 25; //variable

let next_age = age + 1;

let initials = 'TSQ';

let details = [
    {
    first_name: "Shaoqi", //JSON needs to double quote first_name
    last_name: "Tay"
    }, // needs , when adding to array
    {
    first_name: "Boon",
    last_name: "June"
    },
];

console.log(`My age next year is ${next_age} and my name is ${details[0].last_name} ${details[0].first_name}`);
console.log("The name of the second person is " + details[1].first_name);
if (age >= 18) {
    console.log("Eligible for Moderna and Pfizer");
  } else if (age >= 12 && age < 18) {
    console.log("Eligible for Pfizer only");
  } else {
    console.log("Not eligible for now.");
  }

// if (request is valid){
//     serve the request
// }
// else{
//     return error;
// }

// //  Defining the function
// // 1. Normal way
// function function_name(parameter1, paremeter2) {
//   console.log("Inside the function");
// }

// // 2. Anonymous function
// let anon_fn = function (parameter1, parameter2) {
//   console.log("Inside the anonymous function");
// };

// // 3. Arrow function
// let arrow_fn = (parameter1, parameter2) => {
//   console.log("Inside the arrow function");
// };

// Calling the function
// function_name();
// anon_fn();
// arrow_fn();

// // This function adds two numbers and return the sum
// function add(p1, p2) {
//   return p1 + p2;
// }

// add(4, 8);

// Callback Functions
// Function as a parameter to another function.
// operator: callback function
// Code should be open to extension, close to modification.
// function apply_operation(number1, number2, operator) {
//   let result = operator(number1, number2);
//   return result;
// }

// function add(n1, n2) {
//   return n1 + n2;
// }
// function product(n1, n2) {
//   return n1 * n2;
// }

// console.log("Sum is: " + apply_operation(3, 4, add)); // not using add()
// console.log("Product is: " + apply_operation(3, 4, product));

function toolkit1() {
    return "What is the use of <br> tag?";
  }
  function toolkit2() {
    return "What is the role of backend programming?";
  }
  function devops() {
    return "What is the full form of CI/CD?";
  }
  
  function conduct_quiz(student_name, module) {
    // Print the instruction
    console.log("Welcome: " + student_name);
  
    // print the quiz questions
    console.log(module());
  
    // print the completion message
    console.log("The quiz is submitted successfully");
  }
  
  conduct_quiz("Dixant", devops);
  