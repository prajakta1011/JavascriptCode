//this is object in JS, it has a key value pair and we can delete the values or replace them, we can have keys either to be numbers, strings boolean different things
//we can also have nested objects in JS, we can have arrays as values in objects as well-- But right now focus on this basic code
let home ={
    addressHome: "Street Washington 1",
    city: "Los Angeles",
    country: "America",
    phone: 18007862,
    membersInHouse: 4,
    hasPet: false
}
console.log(home.hasPet);
console.log(home.membersInHouse);

console.log(home["country"]);

//similar to console.log there are other things like console.table as well

console.table(home);  //it will give you a table of index and values of the mentioned object

console.count()
console.count()