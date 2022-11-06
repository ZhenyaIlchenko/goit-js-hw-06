const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const emailEl = event.currentTarget.elements.email;
  const passwEl = event.currentTarget.elements.password;

  if (emailEl.value === "" || passwEl === "") {
    alert("Всі поля мають бути заповнені!");
    return;
  }
  const data = {
    email: emailEl.value,
    password: passwEl.value,
  };
  console.log(data);

  form.reset();
}
