async function autoUpdateFormHandler(event) {

  event.preventDefault();
  const id = document.querySelector('#id-auto-update').value.trim();
  const company_name = document.querySelector('#company-auto-update').value.trim();
  const annual_premium = document.querySelector('#premium-auto-update').value.trim();
  const policy_number = document.querySelector('#policy-auto-update').value.trim();
  const expiration_date = document.querySelector('#exp-date-auto-update').value.trim();
  const vehicle = document.querySelector('#vehicle-update').value.trim();
  const owner_id = document.getElementById('owner-auto-update').value.trim();

  console.log ('klklklklkl',id, company_name, annual_premium, policy_number, expiration_date, vehicle, owner_id)

  const response = await fetch(`/api/auto/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      id,
      company_name,
      annual_premium,
      policy_number,
      expiration_date,
      vehicle,
      owner_id
    }),
    headers: { 'Content-Type': 'application/json' }
  });
  console.log('save', response)
  
  if (response.ok) {
    document.location.replace('/admin');
  } else {
    alert(response.statusText);
  } 
}

    async function auotDeleteHandler(event) {
      event.preventDefault();
      const id = document.querySelector('#id-auto-update').value.trim();
      const response = await fetch(`/api/auto/${id}`, {
        method: 'delete'
      });
    
        // check the response status
        if (response.ok) {
          document.location.replace('/admin');
        } else {
          alert(response.statusText);
        }
      }
   
  document.querySelector('.delete-policy').addEventListener('click', auotDeleteHandler);
  document.querySelector('.update-auto-form').addEventListener('submit', autoUpdateFormHandler);