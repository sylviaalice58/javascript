// while loop
// It runs as long as the given condition evaluates to true
// syntax of while loop
// 1. initialization of a variable
// 2.while keyword
// 3.condition to be checked
// 4.the body of while loop

let i = 0;

while (i <= 10){
    console.log("The new value of i is :", i);
    i++;
}

console.log("=====================")

// Come up with a js example of map loop
// it creates a new array

let number =[1,2,3,4,5];
let squares =number.map(num => num**2);

console.log(squares)

console.log("======================")

const users = [
{ id: 1, name: 'Andrew', email: 'andrew@gmail.com' },
{ id: 2, name: 'Bob', email: 'bob@gmail.com' },
{ id: 3, name: 'Charlie', email: 'charlie@gmail.com' }
];
// Extract only the names into a simple string array
const userNames = users.map(user => user.name);
console.log(userNames);
// Output: ["Andrew", "Bob", "Charlie"]

// assignment page 30
// Task: Write a for loop to print all odd numbers from 1 to 19.



