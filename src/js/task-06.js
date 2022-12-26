const inputRef = document.getElementById("validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else if (
    event.currentTarget.value.length !== Number(inputRef.dataset.length)
  ) {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
