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

  const owner_id = document.querySelector('#owner-id').value.trim();
  const company_name = document.querySelector('#company-home').value.trim();
  const annual_premium = document.querySelector('#premium-home').value.trim();
  const policy_number = document.querySelector('#policy-home').value.trim();
  const expiration_date = document.querySelector('#exp-date-home').value.trim();
  const property_address = document.querySelector('#address-home').value.trim();

  if (owner_id && company_name && annual_premium && policy_number && expiration_date && property_address) {
    const response = await fetch('/api/homeowners', {
      method: 'post',
      body: JSON.stringify({
        owner_id,
        company_name,
        annual_premium,
        policy_number,
        expiration_date,
        property_address
      }),
      headers: { 'Content-Type': 'application/json' }
    });


    if (response.ok) {
      document.location.replace('/admin');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.new-auto-form').addEventListener('submit', autoFormHandler);
document.querySelector('.new-homeowner-form').addEventListener('submit', homeownerFormHandler);
