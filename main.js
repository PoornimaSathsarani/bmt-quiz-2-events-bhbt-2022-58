<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {

    // --- Data Source ---
    const events = [
        // --- Day 1: Nov 20, 2025 ---
        {
            title: "Opening Keynote: The Future of AI",
            type: "Keynote",
            date: "2025-11-20T09:00:00",
            description: "Join industry visionary Dr. Evelyn Reed as she unveils the next decade of AI innovation.",
            image: "images/keynote.jpg"
        },
        {
            title: "Advanced JavaScript Workshop",
            type: "Workshop",
            date: "2025-11-20T10:30:00",
            description: "A 3-hour, hands-on deep-dive into asynchronous JavaScript, Promises, and modern ES6+ features.",
            image: "images/workshop-js.jpg"
        },
        {
            title: "Cybersecurity in the Cloud Era",
            type: "Talk",
            date: "2025-11-20T11:00:00",
            description: "Explore the evolving landscape of cloud security threats and proactive defense strategies.",
            image: "images/cybersecurity.jpg"
        },
        {
            title: "Introduction to Quantum Computing",
            type: "Talk",
            date: "2025-11-20T14:00:00",
            description: "A beginner-friendly overview of quantum mechanics and its potential to revolutionize computing.",
            image: "images/quantum.jpg"
        },
        {
            title: "Networking Mixer & Welcome Reception",
            type: "Social",
            date: "2025-11-20T17:00:00",
            description: "Connect with fellow attendees, speakers, and sponsors over drinks and appetizers.",
            image: "images/mixer.jpg"
        },

        // --- Day 2: Nov 21, 2025 ---
        {
            title: "The Ethics of Machine Learning",
            type: "Talk",
            date: "2025-11-21T09:30:00",
            description: "A critical discussion on the societal impact and ethical responsibilities in ML development.",
            image: "images/ethics.jpg"
        },
        {
            title: "Building Scalable Web Apps with Microservices",
            type: "Talk",
            date: "2025-11-21T10:30:00",
            description: "Learn the principles of microservices from lead engineers at a top tech company.",
            image: "images/scalable.jpg"
        },
        {
            title: "Mastering React Performance",
            type: "Workshop",
            date: "2025-11-21T13:00:00",
            description: "Optimize your React applications by learning memoization, code splitting, and bundle analysis.",
            image: "images/react.jpg"
        },
        {
            title: "The Psychology of User Experience (UX)",
            type: "Talk",
            date: "2025-11-21T14:00:00",
            description: "Understand the cognitive biases and psychological principles that drive effective UX design.",
            image: "images/psychology-ux.jpg"
        },
        {
            title: "Panel: The Future of Remote Work in Tech",
            type: "Panel",
            date: "2025-11-21T16:00:00",
            description: "Industry leaders discuss the challenges, tools, and culture of building successful remote-first teams.",
            image: "images/panel-remote.jpg"
        },
        // ... (Add the rest of the events from the prompt here)
    ];

    // --- DOM Element Selections ---
    const eventContainer = document.getElementById('event-container');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // --- Core Requirement: Dynamic Event Card Generation ---
    const displayEvents = (filteredEvents) => {
        eventContainer.innerHTML = ''; // Clear existing events

        filteredEvents.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card';

            const eventDate = new Date(event.date);
            const formattedDate = eventDate.toLocaleString('en-US', {
                dateStyle: 'medium',
                timeStyle: 'short'
            });

            eventCard.innerHTML = `
                <img src="${event.image}" alt="${event.title}" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x200?text=Image+Not+Found';">
                <div class="event-card-content">
                    <h3>${event.title}</h3>
                    <p class="event-meta">${event.type} | ${formattedDate}</p>
                    <p>${event.description}</p>
                </div>
            `;
            eventContainer.appendChild(eventCard);
        });
    };

    // --- Level 2: Event Filtering ---
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button style
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            
            if (filter === 'All') {
                displayEvents(events);
            } else {
                const filteredEvents = events.filter(event => event.type === filter);
                displayEvents(filteredEvents);
            }
        });
    });

    // --- Level 3 & 4: Smart & Persistent Dark Mode ---
    const body = document.body;
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Function to apply the theme
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    };

    // Check local storage first, then system preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        applyTheme(currentTheme);
    } else if (prefersDarkScheme.matches) {
        applyTheme('dark');
    }

    themeToggleBtn.addEventListener('click', () => {
        const isDarkMode = body.classList.toggle('dark-mode');
        const newTheme = isDarkMode ? 'dark' : 'light';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Persist user's choice
    });

    // --- Initial Display ---
    // Sort events by date before displaying
    events.sort((a, b) => new Date(a.date) - new Date(b.date));
    displayEvents(events);
=======
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
>>>>>>> 9c71f8edfc816e5f15ad4f28eb9bb95e62e8ce79
});
