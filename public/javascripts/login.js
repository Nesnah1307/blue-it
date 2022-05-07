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

async function signupFormHandler(event) {
  event.preventDefault();
  
  const username = document.querySelector('#user-signup').value.trim();
  const email = document.querySelector('#user-email').value.trim();
  const password = document.querySelector('#user-password').value.trim();
  
  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

async function signinFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-signin').value.trim();
  const password = document.querySelector('#password-signin').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('#signUp-form').addEventListener('submit', signupFormHandler);
document.querySelector('#signIn-form').addEventListener('submit', signinFormHandler);


// signUpForm.addEventListener('submit', e => e.preventDefault());
// signInForm.addEventListener('submit', e => e.preventDefault());

