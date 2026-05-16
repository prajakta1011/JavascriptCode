//operators in javascript are used for math calculations, comparisons, logical operations, and more. Here are some common operators in JavaScript:
// 1. Arithmetic Operators: +, -, *, /, %, ++, --
// 2. Assignment Operators: =, +=, -=, *=, /=, %=
// 3. Comparison Operators: ==, ===, !=, !==, >, <, >=, <=  

// 4. Logical Operators: &&, ||, !
// 5. Bitwise Operators: &, |, ^, ~, <<, >>, >>>        

//now example if we want to calculate the discount we should use like this

var actualPrice= 799;
var discountedPrice= 199;
let discountPercent= ((actualPrice-discountedPrice)/actualPrice)*100;
// console.log("Disccounted percent is :"+discountPercent);

displayDiscountPercent= Math.round(discountPercent);
// console.log("Discounted percent is: "+displayDiscountPercent);


var result= actualPrice > discountedPrice; // comparison operator
console.log("Is actual price greater than discounted price? " + result);