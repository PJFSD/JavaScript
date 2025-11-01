let x = 10;
let y = 5;

// Aritimatic
console.log(x + y, x - y, x * y, x / y, x % y);

// Comparison
console.log(x > y);     // true
console.log(x === y);   // string equality (preferred)
console.log(x == "10"); // true (but avoid double ==)

// Logical
console.log(x > 5 && y < 10);    //true
console.log(x > 5 || y > 20);    //true
console.log(!isNaN(x));          //true