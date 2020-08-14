'use strict';

/* querySelector function */
function sel(className) {
  return document.querySelector(className);
}
/* to create a constant using querySelector */
const constantName = sel('.class-name');
console.log(sel('.hats').classList);

/* to change background color */
const backgroundColorSelector = document.querySelector('.js-background-color');

/* to update preview card with radio selection */
function changeBackgroundColor() {
  const profileCard = document.querySelector('.js-profileCard');
  profileCard.style.backgroundColor = backgroundColorSelector.value;
}

backgroundColorSelector.addEventListener('change', changeBackgroundColor);

/*to change skin color*/
const skinColorSelector = document.querySelector('.js-skin-color');

/* to update preview card with radio selection */
function changeSkinColor() {
  /* select all body parts with skin color class*/
  const monsterBodyParts = document.querySelectorAll('.js-monster-color');
  monsterBodyParts.forEach((bodyPart) => {
    bodyPart.style.backgroundColor = skinColorSelector.value;
  });
}

skinColorSelector.addEventListener('change', changeSkinColor);

/*to change details color*/
const detailsColorSelector = document.querySelector('.js-details-color');

/* to update preview card with radio selection */
function changeDetailsColor() {
  /* select all body parts with skin color class*/
  const monsterBodyParts = document.querySelectorAll(
    '.js-monster-color-details'
  );
  monsterBodyParts.forEach((bodyPart) => {
    bodyPart.style.color = detailsColorSelector.value;
  });
}

detailsColorSelector.addEventListener('change', changeDetailsColor);

// ACCESSORIES SECTION

/*Hats*/
/* store all hat options in constant */
const hatOptions = document.querySelectorAll('.hats');

hatOptions.forEach((hat) => {
  hat.addEventListener('change', () => {
    /*reset all to visibility:hidden*/
    const hatIcons = document.querySelectorAll('.hat');
    hatIcons.forEach((hat) => {
      hat.style.visibility = 'hidden';
    });

    const hatChoice = hat.value;
    if (hatChoice === 'wizard') {
      document.querySelector('.js-hat-wizard').style.visibility = 'visible';
    } else if (hatChoice === 'cowboy') {
      document.querySelector('.js-hat-cowboy').style.visibility = 'visible';
    } else if (hatChoice === 'crown') {
      document.querySelector('.js-hat-crown').style.visibility = 'visible';
    } else if (hatChoice === 'party') {
      document.querySelector('.js-hat-party').style.visibility = 'visible';
    }
  });
});
