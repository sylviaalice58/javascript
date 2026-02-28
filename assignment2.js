let gross = 15000;

if ( gross >= 0 && gross <= 5999){
    console.log("The Monthly Contribution is: 150.00 ")
}
else if(gross >5999 && gross <= 7999){
    console.log("The Monthly Contribution is: 300.00 ")
}
else if(gross >7999 && gross <= 11999){
    console.log("The Monthly Contribution is: 400.00")
}
else if(gross >11999 && gross <=14999){
    console.log("The Monthly Contribution is: 500.00")
}
else if(gross >14999 && gross <=19999){
    console.log("The Monthly Contribution is : 600.00")
}
else if(gross >19999 && gross <=24999){
    console.log("The Monthly Contribution is : 750.00")
}
else if(gross >24999 && gross <=29999){
    console.log("The Monthly Contribution is: 850.00")
}
else if(gross >29999 && gross <=49999){
    console.log("The Monthly Contribution is: 1000.00")
}
else if(gross >49999 && gross <=99999){
    console.log("The Monthly Contribution is: 1500.00")
}
else if(gross >99999){
    console.log("The Monthly Contribution is: 2000.00")
}
else{
    console.log("Invalid gross income")
}
