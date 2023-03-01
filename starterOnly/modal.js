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
const formDataConditionsGenerale = document.querySelector(".formData-conditions-generales")
  // Ajouts ciblage html
const closeBtn = document.querySelectorAll(".close");
const form = document.querySelector(".form")
const prenom = document.querySelector('#first');
const nom = document.querySelector("#last");
const email = document.querySelector("#email");
const anniversaire = document.querySelector("#birthdate");
const nbTournois = document.querySelector("#quantity");
const localisations = document.querySelectorAll('input[name="location"]');
const checkboxObligatory = document.querySelector("#checkbox1");
const checkboxOptional = document.querySelector("#checkbox2");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  form.style.display = "block";
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// form submit
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validate();
})

// fonctions inputs minimum value requises
const prenomValide = () => prenom.value.trim().length >= 2;
const nomValide = () => nom.value.trim().length >= 2;
let regexEmail = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
const emailValide = () => regexEmail.test(email.value);
const regexNbTournois = /^\d+$/;
const nbTournoisValide = () => regexNbTournois.test(nbTournois.value);
function localisationValide (localisations){
  for (let localisation of localisations) {
    if (localisation.checked) {
      return true;
    }
  }
  return false;
}

function checkboxObligatoryValide (checkboxObligatory) {
  if(checkboxObligatory.checked) {
    return true
  }
  return false
}

// create an object to save all users inputs values
let dataSaving = {};

function validate() {
  let erreur=false;
  if(!prenomValide()) {
    erreur=true;
  }
  if(!nomValide()) {
    erreur=true;
  } 
  if(!emailValide()) {
    erreur=true;
  } 
  if(!nbTournoisValide()) {
    erreur=true;
  } 
  if(!localisationValide (localisations)) {
    erreur=true;
  }
  if(!checkboxObligatoryValide(checkboxObligatory)) {
    erreur=true;
  }

  if(!prenomValide() === false && !nomValide() === false && !emailValide() === false && !nbTournoisValide() === false && !localisationValide(localisations) === false && !checkboxObligatoryValide(checkboxObligatory) === false) {
    form.style.display = "none";
  }
}

console.log(prenom.value)
console.log(nom.value)
console.log(email.value)
console.log(nbTournois.value)
console.log(localisations.value)
