const formRef = document.querySelector(".login-form");
console.log(formRef);

formRef.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === "" || password.value === "") {
//     alert("Empty area!");
//     return
//   }
//   console.log(`Email:${email.value} Password:${password.value}`);
//   event.currentTarget.reset();
// }

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
    alert("Empty area!");
    return;
  }
  const formData = {
    email,
    password,
  };
  console.log(formData);
}
