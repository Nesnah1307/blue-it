const signInBtn = document.getElementById('signIn');
const signUpBtn = document.getElementById('signUp');
const signUpForm = document.getElementById('signUp-form');
const signInForm = document.getElementById('signIn-form');
const login = document.querySelector('.login');

signInBtn.addEventListener('click', () => {
  login.classList.remove('right-panel-active');
});

signUpBtn.addEventListener('click', () => {
  login.classList.add('right-panel-active');
});

signUpForm.addEventListener('submit', e => e.preventDefault());
signInForm.addEventListener('submit', e => e.preventDefault());
