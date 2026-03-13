const menu = document.querySelector(".hamburger");
const links = document.querySelector(".nav-links");

if (menu && links) {
  menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    links.classList.toggle("active");
  });
}
