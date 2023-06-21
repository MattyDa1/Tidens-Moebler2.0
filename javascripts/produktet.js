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

/*Produktet*/
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_gallery 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("p_slides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
}

//inspiration fra https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show 
function myFunction() {
  var x = document.getElementById("svar1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}