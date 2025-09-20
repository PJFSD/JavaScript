// let count = 0;
// const countDisplay = document.getElementById("count");
// const increaseBtn = document.getElementById("increaseBtn");
// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");

// increaseBtn.addEventListener("click", () => {
//     count++;
//     updateDisplay();
// });

// decreasreBtn.addEventListener("click", () => {
//     count--;
//     updateDisplay();
// });

// resetBtn.addEventListener("click", () => {
//     count = 0;
//     updateDisplay();
// });

// function updateDisplay() {
//     countDisplay.textContent = count;

//     // Change color dynamically
//     if (count > 0) {
//         countDisplay.style.color = "green";
//     } else if (count < 0) {
//         countDisplay.style.color = "red";
//     } else {
//         countDisplay.style.color = "black"
//     }
// };


let count = 0;
const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn"); // ✅ spelling fixed
const resetBtn = document.getElementById("resetBtn");

increaseBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

function updateDisplay() {
  countDisplay.textContent = count;

  if (count > 0) {
    countDisplay.style.color = "green";
  } else if (count < 0) {
    countDisplay.style.color = "red";
  } else {
    countDisplay.style.color = "black";
  }
}
