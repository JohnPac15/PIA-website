async function adminFormHandler(event) {
    event.preventDefault();
  
    const first_name = document.querySelector('#firstname-register').value.trim();
    const last_name = document.querySelector('#lastname-register').value.trim();
    const email = document.querySelector('#email-register').value.trim();
    const username = document.querySelector('#username-register').value.trim();
    const password = document.querySelector('#password-register').value.trim();
    const policyowner = document.getElementById('policyowner').value.trim()
    

    if (first_name && last_name && email && username && password && policyowner) {
      
      const response = await fetch('/create-admin', {
        method: 'post',
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          username,
          password,
          policyowner,
          admin: true
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      // check the response status
      console.log(response, '==================')
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }    
      
  document.querySelector('.admin-form').addEventListener('submit', adminFormHandler);