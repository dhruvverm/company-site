function toggleSidebar() {
  const sidebar = document.getElementById("mySidebar");
  const toggleIcon = document.getElementById("menu-toggle");
  const body = document.body;

  sidebar.classList.toggle("active");
  toggleIcon.classList.toggle("active");

  // Scroll disable/enable
  if (sidebar.classList.contains("active")) {
    body.classList.add("no-scroll");
  } else {
    body.classList.remove("no-scroll");
  }

  // Smooth icon switch
  setTimeout(() => {
    toggleIcon.innerText = sidebar.classList.contains("active") ? "✕" : "☰";
  }, 150);
}

// ✅ Typing Effect — SAFE
const phrases = [
  "scalable systems",
  "beautiful interfaces",
  "automated pipelines",
  "fast, modern websites",
  "secure cloud setups",
  "with DevOps mindset",
  "bold digital experiences"
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
const speed = 70;
const pause = 1500;

function loop() {
  const display = document.getElementById("type-text");

  if (!display) {
    console.log("❌ type-text NOT FOUND — skipping typing effect.");
    return; // Safe exit if element not present
  }

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase = phrases[i].slice(0, j++);
    }

    if (isDeleting && j >= 0) {
      currentPhrase = phrases[i].slice(0, j--);
    }

    display.innerHTML = currentPhrase;

    if (!isDeleting && j === phrases[i].length + 1) {
      isDeleting = true;
      setTimeout(loop, pause);
      return;
    }

    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }

    setTimeout(loop, speed);
  }
}

loop();

// ✅ Go To Top Button — SAFE
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM Loaded");

  const goTopBtn = document.getElementById("goTopBtn");

  if (!goTopBtn) {
    console.log("❌ Go To Top Button NOT FOUND!");
  } else {
    console.log("✅ Button Found!");
  }

  window.addEventListener("scroll", () => {
    console.log("✅ Scroll Event Working");

    if (goTopBtn) {
      if (window.scrollY > 100) {
        console.log("✅ Adding .show");
        goTopBtn.classList.add("show");
      } else {
        console.log("✅ Removing .show");
        goTopBtn.classList.remove("show");
      }
    }
  });

  window.topFunction = function() {
    console.log("✅ Top Function Clicked");
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
});
