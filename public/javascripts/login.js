const signInBtn = document.getElementById('signIn');
const signUpBtn = document.getElementById('signUp');
const signUpForm = document.getElementById('signUp-form');
const signInForm = document.getElementById('signIn-form');
const container = document.querySelector('.container');

signInBtn.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

signUpBtn.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signUpForm.addEventListener('submit', e => e.preventDefault());
signInForm.addEventListener('submit', e => e.preventDefault());
