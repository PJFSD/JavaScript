// function taht take other function as arguments or return them.

function operate(x, y, fn) {
    return fn(x, y);
}

console.log(operate(5, 3, (a, b) => a + b));    // 8
console.log(operate(5, 3, (a, b) => a * b));    // 15 