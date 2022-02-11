async function autoDeleteHandler(event) {
    event.preventDefault();
    const id = document.querySelector('#delete-auto').value.trim();
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

  async function homeownerDeleteHandler(event) {
    event.preventDefault();
    const id = document.querySelector('#delete-home').value.trim();
    console.log('click', id)
    /*const response = await fetch(`/api/homeowners/${id}`, {
      method: 'delete'
    });
  
      // check the response status
      if (response.ok) {
        document.location.replace('/admin');
      } else {
        alert(response.statusText);
      }*/
    }
    
  
  document.querySelector('.delete-home-form').addEventListener('click', homeownerDeleteHandler);
  