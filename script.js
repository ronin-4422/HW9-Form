
let form  = document.getElementById('test');
let userName = document.getElementById('username');
let password = document.getElementById('password')
let btn = document.getElementById('button');
 
form.addEventListener('change', () => { 
  function validUser() {
    if ((/^[a-zA-Z0-9]{2,15}/).test(userName.value)) {
      userName.className = 'valid';
    } else {
      userName.className = 'invalid';
    }
    console.log(userName.value);
  }
  validUser();
  function validPassword() {
    if ((/^(?=.*[$#])[a-zA-Z0-9#$]{6,15}/).test(password.value)) {
      password.className = 'valid';
    } else {
      password.className = 'invalid';
    }
  }
  validPassword();
});

function consoleData(event) {
  event.preventDefault();
  if ((/^[a-zA-Z0-9]{2,15}/g).test(userName.value) && 
  (/^(?=.*[$#])[a-zA-Z0-9#$]{6,15}$/).test(password.value)) {
    document.forms[0].reset();
  }
}