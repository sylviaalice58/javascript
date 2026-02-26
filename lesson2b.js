// Comparison operators
let number1 = 5;
let number2 = 10;
let number3 = 20;

console.log(number1==number2); // false
console.log(number1!=number2); // true
console.log(number1>=number2); // false
console.log(number1<=number2); // true
console.log(number1>number2); // false
console.log(number1<number2); // true

// Triple equal to operator-
console.log(number1===number2); // false
console.log(number1===5); // true

// logical operators are used to evaluate two or more conditions and also give a boolean answer
// logical AND operator(&&) - this operator returns true if both conditions are true
console.log((number1<number2) && (number2>number1)&&(number3>number2)); // true

// logical OR operator(||) - this operator returns true if at least one of the conditions is true
console.log((number1>number2) || (number2>number1) || (number3>number2)); // true

// logical NOT operator(!) - this operator returns the opposite of the condition
console.log(!(number1>number2)); // true because number1 is not greater than number2