'use strict';

/* form fill section */

const inputmonsterName = document.querySelector('.js-monsterName');
const inputRace = document.querySelector('.js-power');
const inputEmail = document.querySelector('.js-email');
const inputTelephone = document.querySelector('.js-telephone');
const inputLinkedin = document.querySelector('.js-linkedin');
const inputGithub = document.querySelector('.js-github');

const outputmonsterName = document.querySelector('.js-monsterName-output');
const outputRace = document.querySelector('.js-race-output');

const formData = {};

function getFormData() {
  formData.name = inputmonsterName.value;
  formData.race = inputRace.value;
}

// function getFormData(ev) {
//   const inputName = ev.currentTarget.name;
//   const inputValue = ev.currentTarget.value;

//   formData[inputName] = inputValue;
//   console.log(ev.currentTarget);
// }
function updateCardData(obj) {
  if (!obj.name) {
    outputmonsterName.innerHTML = 'Bubbles';
  } else {
    outputmonsterName.innerHTML = obj.name;
  }
  outputRace.innerHTML = obj.race;
  if (!obj.race) {
    outputRace.innerHTML = 'Burps Rainbows';
  } else {
    outputRace.innerHTML = obj.race;
  }
}

function getDataUpdateCard() {
  getFormData('keyup');
  updateCardData(formData);
}

inputmonsterName.addEventListener('keyup', getDataUpdateCard);
inputRace.addEventListener('keyup', getDataUpdateCard);
// inputEmail.addEventListener('keyup', getDataUpdateCard);
// inputTelephone.addEventListener('keyup', getDataUpdateCard);
// inputLinkedin.addEventListener('keyup', getDataUpdateCard);
// inputGithub.addEventListener('keyup', getDataUpdateCard);

// const userData = {};

// const name = document.querySelector('#full-name');
// /* function to check if input is empty and replace suggested text on card if that's the case */
// function isEmpty(outputPlace, outputText) {
//   if (!event.target.value) {
//     outputPlace.innerHTML = outputText;
//   }
// }

// function saveUserData(ev) {
//   userData.name = ev.target.value;
//   console.log(userData);
// }
// /* to update preview card in real time with user details */
// function updateNameCard(ev) {
//   const monsterNameOutput = document.querySelector('.js-monsterName');
//   monsterNameOutput.innerHTML = ev.target.value;
//   isEmpty(monsterNameOutput, 'Jane Doe');
// }

// name.addEventListener('keyup', saveUserData);

// // if (!ev.target.value) {
// //     monsterNameOutput.innerHTML = 'Jane Doe';
// //   }

// /* function to make icon opaque when user erases all input */
// function isEmptyIcon(icon) {
//   if (!event.target.value) {
//     icon.style.opacity = '0.3';
//   }
// }

// /* to insert social media url/href into icons*/

// const github = document.querySelector('#github');

// function addHref() {
//   const githubIcon = document.querySelector('.js-github');
//   githubIcon.setAttribute('href', event.target.value);
//   console.log(githubIcon);

//   isEmptyIcon(githubIcon);
// }

// github.addEventListener('keyup', addHref);

// /* create function to save data, another to update date, then put both in the eventhandler*/

// /* event = change when it's a matter of on/off or true/false in forms like with the file add button or a tick box*/
