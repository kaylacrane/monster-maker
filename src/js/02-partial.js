/* form fill section */

const inputmonsterName = document.querySelector('.js-monsterName');
const inputRace = document.querySelector('.js-power');

const outputmonsterName = document.querySelector('.js-monsterName-output');
const outputRace = document.querySelector('.js-race-output');

const formData = {};

function getFormData() {
  formData.name = inputmonsterName.value;
  formData.race = inputRace.value;
}

function updateCardData(obj) {
  if (!obj.name) {
    outputmonsterName.innerHTML = 'Bubbles';
  } else {
    outputmonsterName.innerHTML = obj.name;
  }
  outputRace.innerHTML = obj.race;
  if (!obj.race) {
    outputRace.innerHTML = 'Under the Bed Monster';
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
