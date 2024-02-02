// Variables
let a = 5;
let b = 3;

// Arithmetic Operations
const sum = a + b;
const difference = a - b;
const product = a * b;
const quotient = a / b;
const remainder = a % b;
 
//This is how you print
console.log('Arithmetic Operations:');
console.log('Sum:', sum);
console.log('Difference:', difference);
console.log('Product:', product);
console.log('Quotient:', quotient);
console.log('Remainder:', remainder);

// Relational Operators
const isEqual = a === b;
const isNotEqual = a !== b;
const isGreaterThan = a > b;
const isLessThan = a < b;
const isGreaterOrEqual = a >= b;
const isLessOrEqual = a <= b;

console.log('\nRelational Operators:');
console.log('Equal:', isEqual);
console.log('Not Equal:', isNotEqual);
console.log('Greater Than:', isGreaterThan);
console.log('Less Than:', isLessThan);
console.log('Greater or Equal:', isGreaterOrEqual);
console.log('Less or Equal:', isLessOrEqual);

// Conditional Statements
if (a > b) {
  console.log(`a (${a}) is greater than b (${b}).`);
} else {
  console.log(`b (${b}) is greater than or equal to a (${a}).`);
}


// Loops
console.log('\nLoop Example:');
for (let i = 0; i < 3; i++) {
  console.log(`Iteration ${i + 1}`);
}

// Functions
function multiply(x, y) {
  return x * y;
}

console.log('\nFunction Example:');
const result = multiply(a, b);
console.log(`Multiplying ${a} by ${b} equals ${result}`);

// Arrays
const colors = ['red', 'green', 'blue'];

console.log('\nArray Example:');
for (const color of colors) {
  console.log(color);
}
