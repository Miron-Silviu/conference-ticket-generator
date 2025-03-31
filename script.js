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

function patern() {
  return emailPatern;
}
const emailPatern = /^[^\s@][+@[^\s@]+\.[^\s@]+$/;
const check = new RegExp('@');
// console.log(check.test(emailPatern));

// const check = test.test(patern);

mainBtn.addEventListener('click', function () {
  let fullName = nameInp.value;
  let email = emailInp.value;
  let gitHub = gitHubInp.value;
  check.test(emailPatern);
  console.log(fullName, email, gitHub);

  if (fullName || email || gitHub == '') {
    console.log('Please complete the full name ');
  }
});
