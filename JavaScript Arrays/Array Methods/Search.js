// Searching

// const fruits = ["Apple", "Banana", "cherry", "Mango"];
// console.log(fruits.indexOf("Mango"));      // index number
// console.log(fruits.includes("Sitafal"));    // true / false

// Iteration
// const fruit = ["Sitafal", "Ramfal", "strabery"]
// fruits.forEach((fruit) => console.log(fruit));

// Transfomation
// const numbersArr = [1,2,3,4,5];
// const doubled = numbersArr.map(num => num * 2);
// console.log(doubled);     // [2, 4, 6, 8, 10]

// const numbersArr = [1,2,3,4,5];
// const evens = numbersArr.filter(num => num % 2 === 0);
// console.log(evens);          // [2, 4]

const numbersArr = [1,2,3,4,5];
const sum = numbersArr.reduce((acc,num) => acc + num, 0);
console.log(sum);               // 15