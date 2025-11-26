const tooltip = document.getElementById('tooltipText');

// Left chamber → Categories
document.getElementById('region1').addEventListener('mouseenter', () => {
  tooltip.textContent = 'Good Vibes';
});

// Right chamber → Game
document.getElementById('region2').addEventListener('mouseenter', () => {
  tooltip.textContent = 'Constellation Maker';
});

// Reset tooltip
document.querySelectorAll('.heart-region').forEach(el => {
  el.addEventListener('mouseleave', () => {
    tooltip.textContent = 'Hover over a realm';
  });
});

// Click navigation
document.getElementById('region1').addEventListener('click', () => {
   location.href = '/good-vibes/';
});

document.getElementById('region2').addEventListener('click', () => {
  location.href = '/constellation-maker/';
});


// ==================================================
// ========== FIXED NAV HIGHLIGHT LOGIC ==============
// ==================================================
document.addEventListener("DOMContentLoaded", function () {
  let current = window.location.pathname;

  // Normalize home
  if (current === "/" || current === "") {
    current = "index";
  } else {
    current = current.replace(/^\/|\/$/g, ""); // remove both slashes
  }

  const links = document.querySelectorAll(".nav a");

  links.forEach(link => {
    let href = link.getAttribute("href");

    if (href === "/" || href === "") {
      href = "index";
    } else {
      href = href.replace(/^\/|\/$/g, "");
    }

    if (href === current) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});


// ====================================
// 4. FEEDBACK NOTEPAD
// ====================================
const feedbackBtn = document.getElementById('feedback-btn');
const feedbackForm = document.getElementById('feedback-form');
const closeBtn = document.getElementById('close-feedback');

// Toggle
feedbackBtn.addEventListener('click', () => {
  feedbackForm.classList.toggle('hidden');
});

// Close
closeBtn.addEventListener('click', () => {
  feedbackForm.classList.add('hidden');
});
