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