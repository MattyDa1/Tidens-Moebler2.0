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

/*Forsiden*/
//inspiration fra https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("prik");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1;}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2500);
}