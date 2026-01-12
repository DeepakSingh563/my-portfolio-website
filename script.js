document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });

        menu.querySelectorAll("a[href^='#']").forEach(link => {
            link.addEventListener("click", e => {
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
        reveals.forEach(section => {
            const top = section.getBoundingClientRect().top;
            if (top < windowHeight - 100) {
                section.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-zoom")
  .forEach(el => observer.observe(el));
