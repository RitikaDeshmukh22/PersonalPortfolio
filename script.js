// ================================
// DOM SELECTION
// ================================
const heading = document.querySelector("h1");
const aboutSection = document.getElementById("about");
const form = document.querySelector("form");
const darkBtn = document.getElementById("darkToggle");

const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const phoneInput = document.querySelector('input[name="phone"]');


// ================================
// DOM MANIPULATION
// ================================

// Change text content
heading.innerHTML = "Hello <br>This is Ritika Deshmukh";

// Change style
//aboutSection.style.backgroundColor = "#ffffff";
aboutSection.style.borderRadius = "10px";
aboutSection.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";


// ================================
// EVENT HANDLING
// ================================

// Click Event
heading.addEventListener("click", function () {
    alert("Welcome to Ritika's Portfolio ");
});

// Hover Event
heading.addEventListener("mouseover", function () {
    heading.style.color = "#facc15";
});

heading.addEventListener("mouseout", function () {
    heading.style.color = "#1e3a8a";
});

// Form Submit Event
form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (validateForm()) {
        alert("Form Submitted Successfully...!");
        form.reset();
    }
});


// ================================
// REAL-TIME FORM VALIDATION
// ================================

nameInput.addEventListener("input", function () {
    if (nameInput.value.length < 3) {
        nameInput.style.borderColor = "red";
    } else {
        nameInput.style.borderColor = "green";
    }
});

emailInput.addEventListener("input", function () {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(pattern)) {
        emailInput.style.borderColor = "red";
    } else {
        emailInput.style.borderColor = "green";
    }
});

phoneInput.addEventListener("input", function () {
    if (phoneInput.value.length !== 10) {
        phoneInput.style.borderColor = "red";
    } else {
        phoneInput.style.borderColor = "green";
    }
});

// Final Validation Function
function validateForm() {
    if (
        nameInput.value.length < 3 &&
        !emailInput.value.includes("@") &&
        phoneInput.value.length !== 10
    ) {
        alert("Please fill all fields correctly ");
        return false;
    }
    return true;
}


// ================================
// DARK MODE FEATURE
// ================================

darkBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});


// ================================
// IMAGE CLICK EFFECT (Gallery)
// ================================

const images = document.querySelectorAll("#gallery img");

images.forEach(function (img) {
    img.addEventListener("click", function () {
        img.style.border = "3px solid #facc15";
    });
});