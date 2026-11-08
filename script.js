// Lab 7 to 10: Dynamic Student Portal Script

console.log("Portal script loaded successfully.");

// --- Lab 10: OOP Student Class ---
class Student {
    constructor(name, course, year, email = "") {
        this.name = name;
        this.course = course;
        this.year = year;
        this.email = email;
    }

    getSummary() {
        return `${this.name} - ${this.course} (Yr ${this.year})`;
    }
}

// 1. Add student instance to DOM
function addStudentToPage(studentInstance) {
    const listElement = document.getElementById("student-list");
    if (listElement) {
        const listItem = document.createElement("li");
        listItem.textContent = studentInstance.getSummary();
        listElement.appendChild(listItem);
    }
}

// 2. Display all students using Student class instances
function displayAllStudents(studentsArray) {
    const listElement = document.getElementById("student-list");
    const countElement = document.getElementById("student-count");

    if (listElement) {
        listElement.innerHTML = ""; // Clear existing list
        studentsArray.forEach(function (data) {
            // Instantiate Student class
            const studentObj = new Student(data.name, data.course, data.year, data.email);
            addStudentToPage(studentObj);
        });
    }

    if (countElement) {
        countElement.textContent = studentsArray.length;
    }
}

// 3. Fetch API implementation with error handling
function fetchStudentData() {
    fetch("students.json")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP error! Status: " + response.status);
            }
            return response.json();
        })
        .then(function (data) {
            displayAllStudents(data);
        })
        .catch(function (error) {
            console.error("Error fetching student data:", error);
            const listElement = document.getElementById("student-list");
            if (listElement) {
                listElement.innerHTML = "<li style='color: red;'>Failed to load student data.</li>";
            }
        });
}

// 4. Attach Event Listeners
document.addEventListener("DOMContentLoaded", function () {
    const showBtn = document.getElementById("show-students-btn");
    if (showBtn) {
        showBtn.addEventListener("click", function () {
            fetchStudentData();
            showBtn.disabled = true;
            showBtn.textContent = "Data Loaded";
        });
    }

    // --- Lab 10: Regex-Based Form Validation ---
    const registerForm = document.querySelector("form");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            const nameInput = document.getElementById("fullname");
            const emailInput = document.getElementById("email");

            // Regular Expressions
            const nameRegex = /^[A-Za-z\s]+$/; // Letters and spaces only
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email format

            let isValid = true;

            // Validate Name
            if (nameInput) {
                if (!nameInput.value.trim() || !nameRegex.test(nameInput.value.trim())) {
                    alert("Please enter a valid full name containing only letters and spaces.");
                    isValid = false;
                }
            }

            // Validate Email
            if (isValid && emailInput) {
                if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
                    alert("Please enter a valid email address (e.g., user@example.com).");
                    isValid = false;
                }
            }

            if (!isValid) {
                event.preventDefault(); // Stop form submission on failure
            }
        });
    }
});