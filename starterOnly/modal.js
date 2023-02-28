function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
  // Ajouts
const closeBtn = document.querySelectorAll(".close");
let form = document.querySelector(".form")
// const submit = document.querySelector(".btn-submit");
// const prenom = document.querySelector("#prenom");
const nom = document.querySelector("#nom");
const mail = document.querySelector("#mail");
const nbTournois = document.querySelector("#nb-tournois");
const tournoiSelection = document.querySelector(".tournoi-selection");
const checkboxObligatory = document.querySelector("#checkbox1");
const checkboxOptional = document.querySelector("#checkbox2");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));



