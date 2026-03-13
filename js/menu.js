const menu = document.querySelector(".hamburger");
const links = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    links.classList.toggle("active");
});