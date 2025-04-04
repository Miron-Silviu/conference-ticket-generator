'use strict';

// Naming variables

const imgInput = document.getElementById('imgInp');

// Buttons
const mainBtn = document.querySelector('.main__btn');
const changeBtn = document.querySelector('.change');
const removeBtn = document.querySelector('.remove');

// Inputs
const nameInp = document.querySelector('.input__name');
let emailInp = document.querySelector('.email__input');
const gitHubInp = document.querySelector('.github__input');
const dragDropInp = document.querySelector('.file__upload');

// paragraphs
const emailErrorInfo = document.querySelector('.email__error__info');

// Create regex function
function patern(input) {
  const emailPatern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPatern.test(input);
}

const isEmailInvalid = function (input) {
  return patern(input);
};

// Add event listner

mainBtn.addEventListener('click', function () {
  let fullName = nameInp.value;
  let email = emailInp.value;
  let gitHub = gitHubInp.value;
  let emailValid = isEmailInvalid(email);

  if (emailValid === false) {
    emailErrorInfo.style.visibility = 'visible';
  }
  console.log(fullName, emailValid, gitHub);
});
