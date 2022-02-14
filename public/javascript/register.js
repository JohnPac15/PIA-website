const quoteRequest =[]

async function signupFormHandler(event) {
    event.preventDefault();
  
    const first_name = document.querySelector('#firstname-register').value.trim();
    const last_name = document.querySelector('#lastname-register').value.trim();
    const email = document.querySelector('#email-register').value.trim();
    const username = document.querySelector('#username-register').value.trim();
    const password = document.querySelector('#password-register').value.trim();
    const policyowner = document.getElementById('policyowner').value.trim()
    
    console.log(quoteRequest) 
  
    if (first_name && last_name && email && username && password && policyowner) {
      
      const response = await fetch('/register', {
        method: 'post',
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          username,
          password,
          policyowner,
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(response, '==================')
      if (response.ok) {
        if (admin) {
          document.location.replace("/admin");
        } else {
          if (quoteRequest[0] === "home" || quoteRequest[1] === "home" || quoteRequest[0] === "auto" || quoteRequest[1] === "auto" ){
            document.location.replace('/quote');
          } else {
          document.location.replace('/');
          }
        }  
       } else {
        alert(response.statusText);
    }
  }
   
  function requestHome(event){
    event.preventDefault();
    document.getElementById('home').disabled = true
    const homeQuote = document.getElementById('home').value
    const addHome = quoteRequest.push(homeQuote)
    return addHome

  }
  function requestAuto(event){
    event.preventDefault();
    document.getElementById('auto').disabled = true
    const autoQuote = document.getElementById('auto').value 
    const addAuto = quoteRequest.push(autoQuote)
    return addAuto

  }

      
  document.querySelector('.register-form').addEventListener('submit', signupFormHandler);
  document.getElementById('auto').addEventListener('click', requestAuto);
  document.getElementById('home').addEventListener('click', requestHome);