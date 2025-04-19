'use strict';

// Naming variables

const imgInput = document.getElementById('imgInp');

// Buttons
const mainBtn = document.querySelector('.main__btn');
const removeBtn = document.querySelector('.remove');
const changeBtn = document.querySelector('.change');

// Inputs
const nameInp = document.querySelector('.input__name');
let emailInp = document.querySelector('.email__input');
const gitHubInp = document.querySelector('.github__input');
// const dragDropInp = document.querySelector('.file__upload');

// paragraphs
const emailErrorInfo = document.querySelector('.email__error__info');
const dragDropParagraphInfo = document.querySelector('.drag__drop__info');

// containers

const dragDropButtonsContainer = document.querySelector('.drag__drop__buttons');

const dragDropInp = document.getElementById('imgInp');
const avatarImag = document.getElementById('avatarImg');

// Create regex function
function patern(input) {
  const emailPatern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPatern.test(input);
}

imgInp.onchange = (evt) => {
  const [file] = imgInp.files;

  if (file) {
    avatarImag.src = URL.createObjectURL(file);

    avatarImag.style.display = 'block';
  }
  dragDropButtonsContainer.style.display = 'flex';
  dragDropParagraphInfo.style.display = 'none';
};
// Remove and change buttons
removeBtn.addEventListener('click', function () {
  avatarImag.style.display = 'none';
});

// Remove Button

// FIXME
changeBtn.addEventListener('click', function () {
  console.log('None');
});
// Add event listner

mainBtn.addEventListener('click', function () {
  let fullName = nameInp.value;
  let email = emailInp.value;
  let gitHub = gitHubInp.value;
  let emailValid = emailValid(email);

  if (emailValid === false) {
    emailErrorInfo.style.visibility = 'visible';
  }
  console.log(fullName, emailValid, gitHub);
});
