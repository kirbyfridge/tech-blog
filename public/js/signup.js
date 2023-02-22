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
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

if (document.getElementById('signup-button')) {
    document.getElementById('signup-button').addEventListener('submit', signupFormHandler);
}