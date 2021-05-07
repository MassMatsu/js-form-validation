import {checkRequired, checkCharacters, checkEmail, checkLength, checkConfirmation} from './validation.js'
import {resetClassList, checkErrors} from './utils/helpers.js'

const form = document.getElementById('form');

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
