//Falsy values in javascript are:
// 1. false
// 2. 0
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN

//difference between null and undefined is that null means empty values and undefined means nothing is assigned to the variable.

var city;
console.log(city);
//this will give undefined as a output

var city= null;
console.log(city);
//this will give null as a output   


let num=2;
// if(num==2){
//     console.log("This is a true value");
// }//because == represents equality operator, it only checks the value
if(num===2){
    console.log("This is actually true value");
}//because === represents strict equality operator, it checks the value as well as the data type