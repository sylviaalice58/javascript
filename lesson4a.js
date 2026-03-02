// Fynctions with parameters
// Parameters are values that get passed as arguements when we invoke a function. 
// They help us to create functions that can be reusable through out a program.

function greeting(name){
    console.log("Hello ", name, "How have you been?" )
}

greeting("Andrew")
greeting("Bob")
greeting("Charlie")

console.log("=====================")

// Below is a functions with parameters to calculate the sum of the two numbers
function addition(number1, number2){
    sum= number1 + number2
    console.log("The sum of of the two numbers is ", sum)
}

addition(45, 60)

console.log("=====================")

// By use of a function that accepts parameters calculate the area of a triangle whose base is 20cm and height is 12cm

function area(base , height){
    area = 0.5 * base * height
    console.log ("The area of the triangle is ", area, "cm\u00B2")
}

area(20, 12)

console.log("=====================")
// Find the simple interest given the principle as 50000,rate as 5% and time as 8 years
function simpleinterest (principal, rate, time){
    interest =(principal*rate*time)/100
    console.log("The simple interest is ", interest)
}

simpleinterest(50000, 5, 8)