// Collect multiple arguments into an Array.

function sum(...numbers) {
    return numbers.reduce((a,b) => a + b, 0);
}
console.log(sum(1,2,3,4,5));    // 15