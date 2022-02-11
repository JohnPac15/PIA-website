async function autoUpdateFormHandler(event) {
    event.preventDefault();
    const id = document.querySelector('#id-auto-update').value.trim();
    const company_name = document.querySelector('#company-auto-update').value.trim();
    const annual_premium = document.querySelector('#premium-auto-update').value.trim();
    const policy_number = document.querySelector('#policy-auto-update').value.trim();
    const expiration_date = document.querySelector('#exp-date-auto-update').value.trim();
    const vehicle = document.querySelector('#vehicle-auto-update').value.trim();
  
    const response = await fetch(`/api/auto/${id}`, {
      method: 'put',
      body: JSON.stringify({
        id,
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
    
  async function homeownerUpdateFormHandler(event) {
    event.preventDefault();
    
    const id = document.querySelector('#id-homewoner-update').value.trim();
    const company_name = document.querySelector('#company-homewoner-update').value.trim();
    const annual_premium = document.querySelector('#premium-homewoner-update').value.trim();
    const policy_number = document.querySelector('#policy-homewoner-update').value.trim();
    const expiration_date = document.querySelector('#exp-date-homewoner-update').value.trim();
    const property_address = document.querySelector('#address-homewoner-update').value.trim();

    const response = await fetch(`/api/homeowners/${id}`, {
      method: 'put',
      body: JSON.stringify({
        id,
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

    async function autoDeleteHandler(event) {
      event.preventDefault();
      const id = document.querySelector('.delete-auto').value.trim();
      console.log('click', id)
      /*const response = await fetch(`/api/auto/${id}`, {
        method: 'delete'
      });
    
        // check the response status
        if (response.ok) {
          document.location.replace('/admin');
        } else {
          alert(response.statusText);
        }*/
      }
      document.querySelector('.delete-auto').addEventListener('click', autoDeleteHandler);     
  document.querySelector('.update-auto-form').addEventListener('submit', autoUpdateFormHandler);
  document.querySelector('.update-homeowner-form').addEventListener('submit', homeownerUpdateFormHandler);