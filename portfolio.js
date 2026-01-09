document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  document.querySelectorAll(".menu a").forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = link.getAttribute("href");

      if (!target || !target.startsWith("#")) return;

      const section = document.querySelector(target);

      if (section) {
        e.preventDefault();
        section.scrollIntoView({ behavior: "smooth" });
        menu.classList.remove("active");
      }
    });
  });
});
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeBtn.textContent = document.body.classList.contains("light")
    ? "🌞"
    : "🌙";
});
