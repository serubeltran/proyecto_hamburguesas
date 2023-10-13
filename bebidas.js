const navMini = document.querySelector(".icono1");
const navMenu = document.querySelector(".estilo-navegador");

navMini.addEventListener("click", () => {
    navMenu.classList.toggle("nav_menu_visible");
})