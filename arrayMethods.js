console.clear();

// map - use when you want to iterate,modify element of array
const numbers = [1, 2, 3, 4, 5];
const numberPlusOne = numbers.map((v, i) => v + 1);

console.log("numberPlusOne:", numberPlusOne);

// filter - use when you want to filter an array
const friends = ["pp", "rj", "dj", "hdg"];
const findMe = friends.filter((v, i) => v === "rj");

console.log("findMe:", findMe);

// reduce - use when you want to take a array & combine them into one value
const sum = numbers.reduce((total, v) => total + v);
// (1, 2) inital/first  value + next value 
// (3, 3) total + next value
// (6, 4)
// (10, 5)
console.log('sum:', sum);

