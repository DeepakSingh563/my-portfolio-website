document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", e => {
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
