// for toggle menu (hamburger)

  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });





document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });

    menu.querySelectorAll("a[href^='#']").forEach((link) => {
      link.addEventListener("click", (e) => {
        const target = link.getAttribute("href");
        const section = document.querySelector(target);
        if (section) {
          e.preventDefault();
          section.scrollIntoView({ behavior: "smooth" });
          menu.classList.remove("active");
        }
      });
    });
  }

  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    reveals.forEach((section) => {
      const top = section.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        section.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 },
);

document
  .querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-zoom")
  .forEach((el) => observer.observe(el));

// Expand Project Logic
const aboutButtons = document.querySelectorAll(".about-btn");
const backButtons = document.querySelectorAll(".back-btn");

aboutButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".projectcard");
    card.classList.add("expanded");
  });
});

backButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".projectcard");
    card.classList.remove("expanded");
  });
});

// Scroll Reveal Logic
const revealElements = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right, .reveal-zoom",
);

const scrollReveal = () => {
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);
