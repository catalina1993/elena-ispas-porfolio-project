// Typing Effect on Page Load

function runTypingEffect() {
  const text = "Hi, I am Elena!"; // The text to be typed out
  const typingElement = document.getElementById("typing-text"); // Target element for the typing effect
  const typingDelay = 100; // Delay between each character in milliseconds

  // Call the function to start typing text

  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

// Run the typing effect when the DOM content is fully loaded

document.addEventListener("DOMContentLoaded", runTypingEffect);

// Navigation Bar Active Link Switching
const navLinks = document.querySelectorAll(".main-nav-link"); // Select all navigation links

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

// Smooth Scroll to "Featured Projects" Section
document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault();

  document.querySelector("#projects").scrollIntoView({
    behavior: "smooth",
  });
});
