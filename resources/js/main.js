const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar-links");
const links = document.querySelector(".navbar-item");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});