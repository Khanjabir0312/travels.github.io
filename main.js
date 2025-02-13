const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuBtnIcon.className = navLinks.classList.contains("open") ? "ri-close-line" : "ri-menu-line";
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.className = "ri-menu-line";
});

ScrollReveal().reveal(".header__image img", { distance: "50px", origin: "right", duration: 1000 });