document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");
  const themeToggle = document.getElementById("theme-toggle");
  const loader = document.querySelector(".loader-container");

  // PRELOADER LOGIC
  window.addEventListener("load", () => {
    setTimeout(() => {
      if (loader) {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        setTimeout(() => {
          loader.style.display = "none";
        }, 600);
      }
    }, 1000); // 1s minimum display for smoothness
  });

  // MENU LOGIC
  if (menuToggle && menu) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("active");
    });
    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        menu.classList.remove("active");
      }
    });
  }

  // THEME LOGIC
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    if (themeToggle) themeToggle.checked = savedTheme === "light";
  }

  if (themeToggle) {
    themeToggle.addEventListener("change", () => {
      const theme = themeToggle.checked ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    });
  }

  // PROJECT CARD LOGIC
  document.querySelectorAll(".about-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target.closest(".projectcard").classList.add("expanded");
    });
  });

  document.querySelectorAll(".back-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target.closest(".projectcard").classList.remove("expanded");
    });
  });

  // REVEAL ON SCROLL
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("active");
      });
    },
    { threshold: 0.1 },
  );

  document
    .querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-zoom")
    .forEach((el) => observer.observe(el));
});
