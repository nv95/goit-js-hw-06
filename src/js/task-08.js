const formRef = document.querySelector(".login-form");
console.log(formRef);

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Empty area!");
  }
  console.log(`Email:${email.value} Password:${password.value}`);
  event.currentTarget.reset();
}
