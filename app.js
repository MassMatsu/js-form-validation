import {isValidCharacter, isValidEmail, transformText} from './utils/utils.js'

const form = document.getElementById('form');

// show input error message
const showError = (node, message) => {
  const controlEl = node.parentNode;
  const errorEl = node.nextElementSibling;
  controlEl.classList.add('error');
  errorEl.innerText = message;
};

// show success outline
const showSuccess = (controlEl) => {
  //const controlEl = input.parentNode;
  controlEl.classList.add('success');
};

// ----------------------------------------------------------

// check all for input and show the result
const checkRequired = (inputArray) => {
  inputArray.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${transformText(input.id)} is required`);
    }
  });
};

// check all for half-width characters
const checkCharacters = (inputArray) => {
  inputArray.forEach((input) => {
    if (!isValidCharacter(input.value)) 
      showError(input, `${transformText(input.id)} must be half-width alphanumeric`)
  })
}

// check if Email is valid and show the result
const checkEmail = (input) => {
  if (!isValidEmail(input.value)) {
    showError(input, `${transformText(input.id)} is invalid`);
  }
};

// check if length is valid and show the result
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(
      input,
      `${transformText(input.id)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${transformText(input.id)} must be less then ${max} characters`
    );
  }
};

// check password match
const checkConfirmation = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, `It must be matching with ${transformText(input1.id)}`);
  }
};

// ---------------------------------------------------------

// reset classList
const resetClassList = () => {
  const formControl = document.querySelectorAll('.form-control');
  formControl.forEach((form) => {
    if (
      form.classList.contains('error') ||
      form.classList.contains('success')
    ) {
      form.classList = 'form-control';
    }
  });
};

// check if threre is an error and set success outline. if all good, all form will be reset
const checkErrors = () => {
  const formControl = [...document.querySelectorAll('.form-control')]
  formControl.forEach((form) => {
    if (!form.classList.contains('error')){
      showSuccess(form)
    }
  })
  if (formControl.every((form) => !form.classList.contains('error'))) {
    formControl.forEach((form) => form.children[1].value = '')
  }
};

// actions when the form is submitted
form.addEventListener('submit', (e) => {
  e.preventDefault();
  resetClassList();

  checkRequired([username, email, password, confirmation]);
  checkCharacters([username, password, confirmation])
  checkEmail(email);
  checkLength(password, 6, 10);
  checkConfirmation(password, confirmation);

  checkErrors()
});
