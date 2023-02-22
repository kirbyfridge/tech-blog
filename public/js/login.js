async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        headers: { 
            'Accept' : 'application/json',
            'Content-Type': 'application/json' 
        },
        method: 'POST',
        body: JSON.stringify({
          username: username,
          password: password
        }),
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
document.getElementById('login-button').addEventListener('submit', loginFormHandler);