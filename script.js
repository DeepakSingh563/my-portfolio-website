const cursor = document.getElementById("cursor"),
  ring = document.getElementById("cursorRing");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;
document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
});
(function a() {
  cursor.style.left = mx + "px";
  cursor.style.top = my + "px";
  rx += (mx - rx) * 0.15;
  ry += (my - ry) * 0.15;
  ring.style.left = rx + "px";
  ring.style.top = ry + "px";
  requestAnimationFrame(a);
})();
document.querySelectorAll("a,button").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.width = "18px";
    cursor.style.height = "18px";
    ring.style.width = "54px";
    ring.style.height = "54px";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.width = "10px";
    cursor.style.height = "10px";
    ring.style.width = "36px";
    ring.style.height = "36px";
  });
});
const nav = document.getElementById("nav");
window.addEventListener("scroll", () =>
  nav.classList.toggle("scrolled", window.scrollY > 80),
);
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 },
);
document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
const bObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.width + "%";
        bObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.5 },
);
document.querySelectorAll(".skill-fill").forEach((b) => bObs.observe(b));
