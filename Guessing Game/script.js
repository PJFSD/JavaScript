// let randomNumber = Math.floor(Math.random() * 100);
// const guessInput = document.getElementById("guessInput");
// const guessBtn = document.getElementById("guessBtn");
// const message = document.getElementById("message");
// const resetBtn = document.getElementById("resetBtn");
// let attempts = 0;

// guessBtn.addEventListener("click", () => {
//     const userGuess = Number (guessInput.value);
//     attemps++;

//     if (!userGuess || userguess < 1 || userGuess > 100) {
//         message.textContent = " - Enter a number between 1and 100!";
//         return;
//     }

//     if (userGuess === randomGuess < 1 || userGuess > 100) {
//         message.textContent = `Correct! You guessed in ${attempts} tries.`;
//         guessBtn.display =true;
//         resetBtn.style.display = "block";
//     } else if (userGuess < randomNumber) {
//         message.textContent = "Too low! Try again.";
//     } else {
//         message.textContent = "Too high! Try again."
//     }

//     guessInput.value = "";
//     guessInput.focus();
// });

// resetBtn.addEventListener("click", () => {
//     randomNumber = Math.floor(Math.random() * 100) + 1;
//     attempts = 0;
//     message.textContent = "";
//     guessBtn.disable = false;
//     resetBtn.style.display = "none";
// });

document.addEventListener("DOMContentLoaded", () => {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  const guessInput = document.getElementById("guessInput");
  const guessBtn = document.getElementById("guessBtn");
  const message = document.getElementById("message");
  const resetBtn = document.getElementById("resetBtn");
  let attempts = 0;

  guessBtn.addEventListener("click", () => {
    const userGuess = Number(guessInput.value);
    attempts++;

    if (!userGuess || userGuess < 1 || userGuess > 100) {
      message.textContent = "⛔ Enter a number between 1 and 100!";
      return;
    }

    if (userGuess === randomNumber) {
      message.textContent = `🎉 Correct! You guessed in ${attempts} tries.`;
      guessBtn.disabled = true;
      resetBtn.style.display = "block";
    } else if (userGuess < randomNumber) {
      message.textContent = "📉 Too low! Try again.";
    } else {
      message.textContent = "📈 Too high! Try again.";
    }

    guessInput.value = "";
    guessInput.focus();
  });

  resetBtn.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    message.textContent = "";
    guessBtn.disabled = false;
    resetBtn.style.display = "none";
  });
});
