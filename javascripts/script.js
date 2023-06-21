/*Navigation*/
const Hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");
const Logo = document.querySelector(".logo")

Hamburger.addEventListener("click", () =>{
    Hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    Logo.classList.toggle("active");
})

document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click", () => {
    Hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    Logo.classList.remove("active");
}))