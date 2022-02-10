async function autoFormHandler(event) {
  event.preventDefault();
  const owner_id = document.querySelector('#owner-id').value.trim();
  const company_name = document.querySelector('#company-auto').value.trim();
  const annual_premium = document.querySelector('#premium-auto').value.trim();
  const policy_number = document.querySelector('#policy-auto').value.trim();
  const expiration_date = document.querySelector('#exp-date-auto').value.trim();
  const vehicle = document.querySelector('#vehicle-auto').value.trim();

  if (owner_id && company_name && annual_premium && policy_number && expiration_date && vehicle) {
    const response = await fetch('/api/auto', {
      method: 'post',
      body: JSON.stringify({
        owner_id,
        company_name,
        annual_premium,
        policy_number,
        expiration_date,
        vehicle
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    // check the response status
    if (response.ok) {
      document.location.replace('/admin');
    } else {
      alert(response.statusText);
    }
  }
}
  
async function homeownerFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/homeowner', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.new-auto-form').addEventListener('submit', autoFormHandler);
document.querySelector('.new-homeowner-form').addEventListener('submit', homeownerFormHandler);
