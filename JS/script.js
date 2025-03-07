const navbar = document.querySelector(".nav-list");

document.querySelector(".btn-menu").onclick = () => {
  navbar.classList.toggle("active");
};

const navbarMenu = document.querySelector(".btn-menu");

document.addEventListener("click", function (e) {
  if (!navbarMenu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});
