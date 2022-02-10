async function autoFormHandler(event) {
  event.preventDefault();
  console.log('click');
  const response = await fetch('/add/auto', {
    method: 'get',
    headers: { 'Content-Type': 'application/json' }
  });  

    if (response.ok) {
        document.location.replace('/add/auto');
    } else {
        alert(response.statusText);
    }
 
}

async function homeownerFormHandler(event) {
  event.preventDefault(); 
  console.log('click');
  const response = await fetch('/add/homeowner', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });
  console.log('click2');
  if (response.ok) {
    document.location.replace('/admin');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.auto').addEventListener('submit', autoFormHandler);
document.querySelector('.homeowner').addEventListener('submit', homeownerFormHandler);
