const menu = document.querySelector(".menu");
const toggleBtn = document.querySelector(".menu-toggle");

toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});
