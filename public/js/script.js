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
  
if (document.getElementById('login-button')) {
    document.getElementById('login-button').addEventListener('submit', loginFormHandler);
}


async function signupFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            headers: {
                'Accept' : 'application/json', 
                'Content-Type': 'application/json' 
            },
            method: 'POST',
            body: JSON.stringify({
                email: email,
                username: username,
                password: password
            }),
        });
        if (response.ok) {
            console.log('success');

            document.location.replace('/');

        } else {
            alert(response.statusText);
        }
    }
}

if (document.getElementById('signup-button')) {
    document.getElementById('signup-button').addEventListener('submit', signupFormHandler);
}

async function logout() {
    const response = await fetch('/api/users/logout', {
    headers: { 
        'Accept' : 'application/json',
        'Content-Type': 'application/json' 
    },
      method: 'POST',
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
if (document.getElementById('logout')) {
    document.getElementById('logout').addEventListener('click', logout);
}