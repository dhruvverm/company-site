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
  
    // Smooth content switch with short delay
    setTimeout(() => {
      toggleIcon.innerText = sidebar.classList.contains("active") ? "✕" : "☰";
    }, 150);
  }
  
  
  // Typing Effect
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



// Show button after scroll
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  const goTopBtn = document.getElementById("goTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
}

// Scroll to top smoothly
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
