// show input error message
const showError = (element, message) => {
  const controlEl = element.parentNode;
  const errorEl = element.nextElementSibling;
  controlEl.classList.add('error');
  errorEl.innerText = message;
};

// show success outline
const showSuccess = (element) => {
  //const controlEl = input.parentNode;
  element.classList.add('success');
};

// reset classList
const resetClassList = () => {
  const formControls = document.querySelectorAll('.form-control');
  formControls.forEach((formControl) => {
    if (
      formControl.classList.contains('error') ||
      formControl.classList.contains('success')
    ) {
      formControl.classList = 'form-control';
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
    formControl.forEach((form) => form.
    children[1].value = '')
  }
};

export {showError, showSuccess, resetClassList, checkErrors}
