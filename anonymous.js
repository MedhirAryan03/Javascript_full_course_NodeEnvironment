/*Anonymous functions, also known as function expressions, are functions that are defined without a name. 
In contrast to named functions, anonymous functions are often used 
for short-term or one-time use scenarios. They can be defined inline, 
either assigned to a variable or used as an argument for another function. */

const numbers = [10, 5, 3];
const squared = numbers.map(function(num) {
  return num * num;
});

console.log("Doubled = "+squared)
//here we pass an anonymous function to the map function 

console.log("**** ANOTHER WAY IS USING THE ARROW FUNCTION****")

const tripled = numbers.map((num)=>{
    return num*num*num
})

console.log("Tripled = "+tripled);


/* Create an anonymous function which checks whether an element is greater than 0 or not 
and invoke it withing another defined function that calculates the sums of these positive numbers,
prepare an array having both +ve and -ve numbers beforehand. */