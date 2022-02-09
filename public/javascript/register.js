async function signupFormHandler(event) {
    event.preventDefault();
  
    const first_name = document.querySelector('#firstname-register').value.trim();
    const last_name = document.querySelector('#lastname-register').value.trim();
    const email = document.querySelector('#email-register').value.trim();
    const username = document.querySelector('#username-register').value.trim();
    const password = document.querySelector('#password-register').value.trim();

    if (first_name && last_name && email && username && password) {
      
      const response = await fetch('/register', {
        method: 'post',
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          username,
          password,
        }),
        headers: { 'Content-Type': 'application/json' }
      });
   
      // check the response status
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }    
      
  document.querySelector('.register-form').addEventListener('submit', signupFormHandler);