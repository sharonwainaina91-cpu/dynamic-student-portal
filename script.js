// Lab 7, 8 & 9: Portal Script

console.log("Portal script loaded successfully.");

// 1. Add student to DOM using object properties
function addStudentToPage(studentObj) {
    const listElement = document.getElementById("student-list");
    if (listElement) {
        const listItem = document.createElement("li");
        listItem.textContent = `${studentObj.name} - ${studentObj.course} (Yr ${studentObj.year})`;
        listElement.appendChild(listItem);
    }
}

// 2. Display all students and update total student count
function displayAllStudents(studentsArray) {
    const listElement = document.getElementById("student-list");
    const countElement = document.getElementById("student-count");

    if (listElement) {
        listElement.innerHTML = ""; // Clear existing list
        studentsArray.forEach(function (student) {
            addStudentToPage(student);
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

// 4. Attach Event Listener
document.addEventListener("DOMContentLoaded", function () {
    const showBtn = document.getElementById("show-students-btn");
    if (showBtn) {
        showBtn.addEventListener("click", function () {
            fetchStudentData();
            showBtn.disabled = true;
            showBtn.textContent = "Data Loaded";
        });
    }

    // Form Validation (Register Page)
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