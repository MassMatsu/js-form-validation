
// check if half-width alphanumeric characters
export const isValidCharacter = (value) => {

  const regEx = /^[A-Za-z0-9]*$/;
  return regEx.test(value.replace(/\s+/g, ''));
};

// check if email is valid
export const isValidEmail = (value) => {
  const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEx.test(String(value).toLowerCase());
};

// transform first letter of text to Upper case
export const transformText = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
