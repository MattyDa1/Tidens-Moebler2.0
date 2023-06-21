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

/*FAQ*/
//inspiration fra https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show 
function myFunction1() {
  var x = document.getElementById("svar1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction2() {
  var x = document.getElementById("svar2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction3() {
  var x = document.getElementById("svar3");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction4() {
  var x = document.getElementById("svar4");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction5() {
  var x = document.getElementById("svar5");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function validateForm() {
  var x = document.forms["nyhdesbrev"]["fmail"].value;
  if (x == "" || x == null) {
    alert("Mail must be filled out");
    return false;
  }
  else
    alert("Mail has been sent");
}
