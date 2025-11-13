// 🌙 Dark Mode Toggle
const toggleButton = document.getElementById("themeToggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Change button text based on theme
  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "Light Mode";
  } else {
    toggleButton.textContent = "Dark Mode";
  }
});

// 📬 Contact Form Validation
const form = document.getElementById("contactForm");
const messageDisplay = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    messageDisplay.textContent = "Please fill in all fields.";
    messageDisplay.style.color = "red";
    return;
  }

  if (!email.includes("@")) {
    messageDisplay.textContent = "Please enter a valid email address.";
    messageDisplay.style.color = "red";
    return;
  }

  // Success message
  messageDisplay.textContent = "Message sent successfully!";
  messageDisplay.style.color = "green";
  form.reset();
});

// 🧩 Week 6: Dynamic Projects
const projects = [
  {
    title: "Health Monitor",
    description: "A device to monitor heart rate and temperature.",
    image: "image/profile.jpg"
  },
  {
    title: "AI Chatbot",
    description: "A bilingual chatbot for healthcare assistance.",
    image: "image/project01.jpg"
  },
  {
    title: "Portfolio Website",
    description: "My personal responsive portfolio built with HTML, CSS, and JS.",
    image: "image/project03.jpg"
  }
];

const projectsContainer = document.getElementById("projectsContainer");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
  `;
  projectsContainer.appendChild(card);
});
