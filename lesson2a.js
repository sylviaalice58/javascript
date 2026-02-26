// Object data type:
// An object in java script is a datatype that stores data in form of key value pairs.

let person = {
    Name: "John",
    Age: 70,
    isReistered: true
}

console.log("The details of the person are: ", person);

// first method is by use of square brackets
console.log(person["Age"]);

// second method is by use of dot notation
console.log(person.Name);

// check the data type
console.log(typeof (person)); // object


// Array data type:
// This refers to a collection of items that are on indexes
let fruits = ["Mango", "Pineapple", "Apple", "Banana","Melon","Lemon","Grapes"]

console.log("The entire array of fruits is: ", fruits);

// To access the items of an array we use the index
console.log("The fruit is banana: ", fruits[3]);

// you can slice items of arrey
console.log(fruits.slice(2, 5)); // this will give us the items from index 2 to index 4