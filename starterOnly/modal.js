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
  form.reset();
  formData.forEach((data) => data.setAttribute("data-error-visible", "unset"));
  email.value=null;
  anniversaire.value=null;
  nbTournois.value = null;
  localisations.value =undefined;
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
const regexNaissance = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
const naissanceValide = () => regexNaissance.test(anniversaire.value);
const regexNbTournois = /^\d+$/;
const nbTournoisValide = () => regexNbTournois.test(nbTournois.value);

function localisationValide (localisations){
  for (let localisation of localisations) {
    if (localisation.checked) {
      formData[5].setAttribute("data-error-visible", "false");
      return true;
    }
  }
  formData[5].setAttribute("data-error-visible", "true");
  return false;
}

function checkboxObligatoryValide (checkboxObligatory) {
  if(checkboxObligatory.checked) {
    formData[6].setAttribute("data-error-visible", "false");
    return true
  }
  formData[6].setAttribute("data-error-visible", "true");
  return false
}

// create an object to save all users inputs values
let dataSaving = {};

function validate() {
  let erreur=false;
  if(!prenomValide()) {
    formData[0].setAttribute("data-error-visible", "true");
    erreur=true;
  } else {
    formData[0].setAttribute("data-error-visible", "false");
  }
  if(!nomValide()) {
    formData[1].setAttribute("data-error-visible", "true");
    erreur=true;
  } else {
    formData[1].setAttribute("data-error-visible", "false");
  }
  if(!emailValide()) {
    formData[2].setAttribute("data-error-visible", "true");
    erreur=true;
  } else {
    formData[2].setAttribute("data-error-visible", "false");
  }
  if(!naissanceValide()) {
    formData[3].setAttribute("data-error-visible", "true");
    erreur=true;
  } else {
    formData[3].setAttribute("data-error-visible", "false");
  }
  if(!nbTournoisValide()) {
    formData[4].setAttribute("data-error-visible", "true");
    erreur=true;
  } else {
    formData[4].setAttribute("data-error-visible", "false");
  }
  if(!localisationValide (localisations)) {
    erreur=true;
  }
  if(!checkboxObligatoryValide(checkboxObligatory)) {
    erreur=true;
  }

  // if(!erreur) {
  //   // dataSaving = {
  //   //   prenom,
  //   //   nom,
  //   //   email,
  //   //   nbTournois,
  //   //   naissance,
  //   //   localisations,
  //   // };

  //   form.style.display = "none";
  // }
  if(!prenomValide() === false && !nomValide() === false && !emailValide() === false && !nbTournoisValide() === false && !localisationValide(localisations) === false && !checkboxObligatoryValide(checkboxObligatory) === false) {
    form.style.display = "none";
  }
}

console.log(prenom.value)
console.log(nom.value)
console.log(email.value)
console.log(nbTournois.value)
console.log(localisations.value)
