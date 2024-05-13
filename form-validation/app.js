// get all input elements by their id
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// add event listener to the form
form.addEventListener('submit', function(e){
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}

const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

const validateInputs = () => {
  // get the values of all input fields
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  
  // now add validation condition for each value
  if (usernameValue === '') {
    setError(username, 'Username is required');
  } else {
    setSuccess(username);
  }
  
  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if(!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
  } else {
    setSuccess(email);
  }
  
  if (passwordValue === '') {
    setError(password, 'Password is required')
  } else if (passwordValue.length < 8) {
    setError(password, 'Password must be at least 8 charactor')
  } else {
    setSuccess(password);
  }
  
  if (password2Value === '') {
    setError(password2, 'Please confrm password');
  } else if (password2Value !== passwordValue) {
    setError(password2, 'Password does not match');
  } else {
    setSuccess(password2);
  }
}