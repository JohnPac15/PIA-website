async function deletePolicyOwnerHandler(event) {
    event.preventDefault();
  // used for admin to delete policy owner
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/policyowner/${id}`, {
        method: 'delete'
      });
  
    if (response.ok) {
      document.location.replace("/admin");
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.delete-policyowner-form').addEventListener('click', deletePolicyOwnerHandler)
  