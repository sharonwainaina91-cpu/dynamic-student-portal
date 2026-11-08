// Lab 7 & 8: Portal Script

// --- Lab 7 Logic ---
console.log("Portal script loaded successfully.");

let studentName = "Aisha Khan";
let yearOfStudy = 2;

if (yearOfStudy === 1) {
    console.log(studentName + " is a First-Year Student.");
} else {
    console.log(studentName + " is in Year " + yearOfStudy + ".");
}

// --- Lab 8 Logic: Functions, Arrays & Events ---

// 1. Hardcoded Array of Students
const students = [
    "Aisha Khan",
    "Diego Ramirez",
    "Amara Okafor",
    "Liam Foster",
    "Priya Nair"
];

// 2. Function to Append a Single Student to the DOM
function addStudentToPage(name) {
    const listElement = document.getElementById("student-list");
    if (listElement) {
        const listItem = document.createElement("li");
        listItem.textContent = name;
        listElement.appendChild(listItem);
    }
}

// 3. Function to Loop and Display All Students
function displayAllStudents(studentArray) {
    const listElement = document.getElementById("student-list");
    if (listElement) {
        listElement.innerHTML = ""; // Clear existing items to avoid duplicates
        studentArray.forEach(function (student) {
            addStudentToPage(student);
        });
    }
}

// 4. Attach Click Event Listener to the Button
document.addEventListener("DOMContentLoaded", function () {
    const showBtn = document.getElementById("show-students-btn");
    if (showBtn) {
        showBtn.addEventListener("click", function () {
            displayAllStudents(students);
            showBtn.disabled = true; // Disable button after click
            showBtn.textContent = "Students Displayed";
        });
    }

    // Lab 7 Form Validation Listener
    const registerForm = document.querySelector("form");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            const nameInput = document.getElementById("fullname");
            if (nameInput && nameInput.value.trim() === "") {
                alert("Please enter your full name before submitting.");
                event.preventDefault();
            }
        });
    }
});