// const themeBtn = document.getElementById("themeBtn");
// const body = document.body;

// themeBtn.addEventListener("click", () => {
//     body.classList.toggle("dark-mode");
//     themeBtn.textContent = body.classList.containers("dark-mode")
//     ? "Switch to Light Mode"
//     : "Switch to Dark Mode";
// });


const themeBtn = document.getElementById("themeBtn");
const body = document.body;

themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    themeBtn.textContent = body.classList.contains("dark-mode") // ✅ correct
        ? "Switch to Light Mode"
        : "Switch to Dark Mode";
});
