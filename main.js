const form = document.querySelector('#form');
const emailInput = document.querySelector('.email-input');
const errorMsg = document.querySelector('.error-msg');
const errorIcon = document.querySelector('.err-icon');

const validateEmail = (email) => {
  const emailRegEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isMatch = String(email).toLowerCase().match(emailRegEx);
  console.log(isMatch);
  return isMatch;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateEmail(emailInput.value)) {
    errorMsg.classList.remove('hidden');
    errorIcon.classList.remove('hidden');
    emailInput.classList.add('error');
    return;
  }
  errorMsg.classList.add('hidden');
  errorIcon.classList.add('hidden');
  emailInput.classList.remove('error');
});

emailInput.addEventListener('input', () => {
  if (emailInput.value.length > 0) {
    emailInput.classList.add('content');
  } else {
    emailInput.classList.remove('content');
  }
});
