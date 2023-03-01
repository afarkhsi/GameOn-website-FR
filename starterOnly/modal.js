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
  // Ajouts DOM Elements
const closeBtn = document.querySelectorAll(".close");
const form = document.querySelector(".form");
const formValidation = document.querySelector(".validation-message")
const closeFormValidation = document.querySelector("#close-validation")
const prenom = document.querySelector('#first');
const nom = document.querySelector("#last");
const email = document.querySelector("#email");
const naissance = document.querySelector("#birthdate");
const nbTournois = document.querySelector("#quantity");
const localisations = document.querySelectorAll('input[name="location"]');
const checkboxObligatory = document.querySelector("#checkbox1");

// LAUNCH MODAL EVENT
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// LAUNCH MODAL FORM
function launchModal() {
  form.reset();
  formData.forEach((data) => data.setAttribute("data-error-visible", "unset"));
  email.value=null;
  naissance.value=null;
  nbTournois.value = null;
  localisations.value =undefined;
  formValidation.style.display = "none";
  form.style.display = "block";
  modalbg.style.display = "block";
}

// CLOSE MODAL FORM
function closeModal() {
  modalbg.style.display = "none";
}

// CLOSE MODAL EVENT
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
closeFormValidation.addEventListener("click", closeModal);

// FORM SUBMIT
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validate();
})

// AJOUT DES FONCTIONS DE CONTROLE DES SAISIES DANS LES INPUTS
const prenomValide = () => (prenom.value.trim().length >= 2);
const nomValide = () => (nom.value.trim().length >= 2);
let regexEmail = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
const emailValide = () => regexEmail.test(email.value);
const regexNbTournois = /^\d+$/;
const nbTournoisValide = () => regexNbTournois.test(nbTournois.value);
function naissanceValide (naissance) {
  if(naissance.value == "") {
    formData[3].setAttribute("data-error-visible", "true");
    return false
  } else {
    let birthdate = new Date(naissance.value);
    let today = new Date();
    if(
      birthdate.getDate() >= today.getDate() &&
      birthdate.getMonth() == today.getMonth() &&
      birthdate.getFullYear() == today.getFullYear()
    ) {
      formData[3].setAttribute("data-error-visible", "true");
      return false
    } else {
      formData[3].setAttribute("data-error-visible", "false");
      return true
    }
  }
}

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


// FONCTION DE VERIFICATION DE LA VALIDITÉ DU FORM
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
  if(!naissanceValide (naissance)) {
    erreur=true;
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

  if(!prenomValide() === false && !nomValide() === false && !emailValide() === false && !nbTournoisValide() === false && !localisationValide(localisations) === false && !checkboxObligatoryValide(checkboxObligatory) === false) {
    form.style.display = "none";
    formValidation.style.display = "block";
  }
}
