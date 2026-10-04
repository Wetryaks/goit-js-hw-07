const form = document.querySelector('.login-form');
form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(form);

  const email = formData.get('email');
  const password = formData.get('password');

  if (email.trim() === '' || password.trim() === '') {
    alert('All form fields must be filled in');
    return;
  }

  console.log({ email, password });
  form.reset();
});
