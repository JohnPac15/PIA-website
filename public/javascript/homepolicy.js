async function homeownerUpdateFormHandler(event) {
  event.preventDefault();
  // allows admin to update homeowner policy
  const id = document.querySelector('#id-homewoner-update').value.trim();
  const company_name = document.querySelector('#company-homewoner-update').value.trim();
  const annual_premium = document.querySelector('#premium-homewoner-update').value.trim();
  const policy_number = document.querySelector('#policy-homewoner-update').value.trim();
  const expiration_date = document.querySelector('#exp-date-homewoner-update').value.trim();
  const property_address = document.querySelector('#address-homewoner-update').value.trim();
  const owner_id = document.getElementById('owner-homewoner-update').value.trim()
 
  const response = await fetch(`/api/homeowners/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      id,
      company_name,
      annual_premium,
      policy_number,
      expiration_date,
      property_address,
      owner_id
    }),
    headers: { 'Content-Type': 'application/json' }
  });
  
  if (response.ok) {
    document.location.replace('/admin');
  } else {
    alert(response.statusText);
  } 
}
// allows admin to delete a home policy
    async function homeDeleteHandler(event) {
      event.preventDefault();
      const id = document.querySelector('#id-homewoner-update').value.trim();
      const response = await fetch(`/api/homeowners/${id}`, {
        method: 'delete'
      });
    
        // check the response status
        if (response.ok) {
          document.location.replace('/admin');
        } else {
          alert(response.statusText);
        }
      }
   
  document.querySelector('.delete-policy').addEventListener('submit', homeDeleteHandler);
  document.querySelector('.update-homeowner-form').addEventListener('submit', homeownerUpdateFormHandler);