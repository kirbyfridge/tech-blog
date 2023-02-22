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
  
document.getElementById('logout').addEventListener('click', logout);
