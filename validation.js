import {isValidCharacter, isValidEmail, transformText,} from './utils/utils.js';
import {showError} from './utils/helpers.js'

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
      showError(
        input,
        `${transformText(input.id)} must be half-width alphanumeric`
      );
  });
};

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

export {checkRequired, checkCharacters, checkEmail, checkLength, checkConfirmation}