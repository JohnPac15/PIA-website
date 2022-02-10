async function updateFormHandler(event) {
  event.preventDefault();

  const first_name = document.querySelector("#firstname-register").value.trim();
  const last_name = document.querySelector("#lastname-register").value.trim();
  const email = document.querySelector("#email-register").value.trim();
  const username = document.querySelector("#username-register").value.trim();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  
  const response = await fetch(`/api/edit/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      first_name,
      last_name,
      email,
      username,
    }),
    headers: { "Content-Type": "application/json" },
  });
  console.log(response,'f,yeah')

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.update-information-form').addEventListener('submit', updateFormHandler)
