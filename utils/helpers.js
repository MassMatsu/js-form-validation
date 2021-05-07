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

export {showError, showSuccess, resetClassList, checkErrors}
