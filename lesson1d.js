// String data type
//  A string is a series/sequence of characters that are enclosed in single or double quotes. It is used to represent text in programming.

let name = "Sylvia"
console.log("My name is: ", name)
console.log(typeof(name))

// floating point : This is number with a decimal
let quality = 35.5
console.log("The quality of sugar bought is: ", quality)
console.log(typeof(quality))

// boolean: It returns true or false
let isAdult = true
let isRegistered = false
console.log("Is the person an adult? ", isAdult)
console.log("Is the person registered? ", isRegistered)
console.log(typeof(isAdult))

// undefined: This is a data type that has been declared but there is no value that has been assigned to it. 
let county;
console.log("The  county is: ", county)


// null: This is a data type that contains null value. 
let username = null
console.log("What is the username : ", username)

// assignment research and come up with examples on Object and Arrey data types.Show how to access items of the object and of an array.

// Object data type: An object is a collection of properties, where each property is a key-value pair. It is used to represent complex data structures.

let person = {
    name: "John",
    age: 30,
    city: "New York"    
}
console.log("The person's name is: ", person)
// console.log("The person's age is: ", person.age)
// console.log("The person's city is: ", person.city)



// Array data type: An array is a collection of items that are ordered and indexed. It is used to store multiple values in a single variable.
let fruits = ["apple", "banana", "orange", "grape"]
console.log("The fruits are: ", fruits)
// console.log("The first fruit is: ", fruits[0])
// console.log("The second fruit is: ", fruits[1])
// console.log("The third fruit is: ", fruits[2])
// console.log("The fourth fruit is: ", fruits[3])
// console.log(fruits.slice(0, 2)) // this will return the first two fruits in the array

