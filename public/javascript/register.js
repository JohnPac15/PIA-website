const policyowner = document.getElementById('policyowner')
const quoteRequest =[]

async function signupFormHandler(event) {
    event.preventDefault();
  
    const first_name = document.querySelector('#firstname-register').value.trim();
    const last_name = document.querySelector('#lastname-register').value.trim();
    const email = document.querySelector('#email-register').value.trim();
    const username = document.querySelector('#username-register').value.trim();
    const password = document.querySelector('#password-register').value.trim();
    const policyOwner = policyowner.value.trim()
  
    if (first_name && last_name && email && username && password) {
    
        const response = await fetch('/register', {
          method: 'post',
          body: JSON.stringify({
            first_name,
            last_name,
            email,
            username,
            password,
            policyOwner
          }),
          headers: { 'Content-Type': 'application/json' }
        });
        
      if (response.ok) {
        if (admin) {
          document.location.replace("/admin");
        } else {
          if(quoteRequest[0] === "quote"){
            document.location.replace('/quote');
          } else {
          document.location.replace('/');
          }
        }
      } else {
        alert(response.statusText);
      }
    }
  }
  

  function returnCustomer(event){
    event.preventDefault()
    policyowner.disabled = true
    console.log(policyowner.textContent, policyowner.value)
    if(policyowner.value === "false"){
      policyowner.value = "true"
      console.log(policyowner.value,'hey is it true?')
      policyowner.textContent = "We appreciate your business!"
    } 
  }

  function requestQuote(event){
    console.log('WHYYYY')
    event.preventDefault();
    document.getElementById('quote').disabled = true
    const newQuote = document.getElementById('quote').value
    const addQuote = quoteRequest.push(newQuote)
    return addQuote;
  }
      
  document.querySelector('.register-form').addEventListener('submit', signupFormHandler);
  document.getElementById('quote').addEventListener("click", requestQuote)
  policyowner.addEventListener('click', returnCustomer);