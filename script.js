'use strict';

// Naming variables

const imgInput = document.getElementById('imgInp');

// Buttons
const mainBtn = document.querySelector('.main__btn');
const changeBtn = document.querySelector('.change');
const removeBtn = document.querySelector('.remove');

// Inputs
const nameInp = document.querySelector('.input__name');
const emailInp = document.querySelector('.email__input');
const gitHubInp = document.querySelector('.github__input');

// Add event listner

mainBtn.addEventListener('click', function () {
  let fullName = nameInp.value;
  let email = emailInp.value;
  let gitHub = gitHubInp.value;
  console.log(fullName, email, gitHub);
});
