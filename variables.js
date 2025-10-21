var city = "Delhi";     // old method
let age = 25;           // can be updated
const country = "India"; // cannot change

age = 26;     // ✅ allowed
// country = "USA";  ❌ Error, const cannot be reassigned

console.log(city, age, country);
