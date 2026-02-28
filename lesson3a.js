// Javascript For loop
// Loops are used to iterate through something (Repeat something number of times)
// Structure of thr for loop
// 1.For keyword followed by parenthasis
// 2.Initialization; set the condition; increment/decrement
// 3.Body of the for loop

for(let i =0; i<= 10; i++){
    console.log("The new value of i is: ",i)
}

console.log("=====================================")

for(let i = 0; i <=10;i++)
    if (i == 6){
        console.log("This is number six: ",i)
    }
    else{
        console.log("The new value of i is:",i)
    }   

    console.log("=====================")
// create a for loop that is able to print out all the leap years from 2000 to 2026
for (let years = 2000; years <=2026 ; years++ )
    if ((years % 4 ==0) && (years % 100 !=0) || (years % 400 ==0)){
        console.log("The leap year is:", years)
    }

    console.log("=====================")
// on pdf check page 28
// Task: Write a for loop to print all odd numbers from 1 to 19.
for(let num =1; num <=19; num++)
    if(num%2!=0){
        console.log("The odd number is:",num)
    }
    console.log("=====================")

// Task: Write a for loop to count down from 10 to 1 and print the numbers in the console.
for (let count=10; count >=1; count--){
    console.log(count)
}

console.log("=====================")

// Task: Write a for loop to find the largest number in the array: [10, 20, 4, 45, 99, 1].
let numbers = [10, 20, 4, 45, 99, 1];
let largest = numbers[0]; // Initialize largest with the first element of the array

for (let num =1; num < numbers.length; num++){
    if (numbers[num]>largest){
        largest = numbers[ num ];
    }
}
console.log("The largest number in the array is:", largest);

console.log("=====================")
// Task: Write a for loop to print the multiplication table of 5 from 5 x 1 to 5 x 10.

for (let i =1; i <=10; i++){
    console.log( '5 x ' + i + ' = ' + (5 * i ))
}

