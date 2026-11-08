// Lab 7: JavaScript Overview & Embedding

// 1. Alert welcome message on page load
alert("Welcome to the Dynamic Student Portal!");

// 2. Log message to browser console
console.log("Portal script loaded successfully.");

// 3. Variables and Conditionals
let studentName = "Aisha Khan";
let yearOfStudy = 2;

if (yearOfStudy === 1) {
    console.log(studentName + " is a First-Year Student.");
} else {
    console.log(studentName + " is in Year " + yearOfStudy + ".");
}

// 4. For Loop (Logs numbers 1 to 5)
console.log("Printing semester numbers:");
for (let i = 1; i <= 5; i++) {
    console.log("Semester " + i);
}

// 5. Form validation listener
document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.querySelector("form");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            const nameInput = document.getElementById("fullname");
            if (nameInput && nameInput.value.trim() === "") {
                alert("Please enter your full name before submitting.");
                event.preventDefault(); // Stop form submission
            }
        });
    }
});