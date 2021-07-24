
  
    
    let form  = document.getElementById('test');
    let usernameError = document.querySelector('#username + span.error');
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    
    form.addEventListener('submit', (event) => { 
    let regLogin = /^[a-z0-9$#]{2,15}/i;
    let regPass = /^[a-z0-9$#]{6,15}/i;
    
    event.preventDefault();
    console.log(regPass.test(document.querySelector('#username').value));
    console.log(regLogin.test(document.querySelector('#password').value));
    console.log(username.value);
  })
  

